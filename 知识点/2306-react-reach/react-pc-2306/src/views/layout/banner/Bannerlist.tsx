import React from 'react'
import {
    Button,
    Space,
    Table,
    Image,
    message,
    Popconfirm
} from 'antd'
import type { ColumnsType } from 'antd/es/table';
// 引入图标
import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
// 引入接口
import { getBannerListApi, deleteBannerApi } from '@/api/banner'
import { useNavigate } from 'react-router-dom';
type Props = {};

// 定义轮播图列表数组的具体类型
interface DataType {
    alt: string;
    bannerid: string;
    link: number,
    img: string
}
export default function BannerList({ }: Props) {
    // 当前第几页
    const [current, setCurrent] = useState<number>(1);
    // 每页数据条数
    const [pageSize, setPageSize] = useState<number>(2)
    // 定义轮播图列表数组
    const [bannerList, setBannerList] = useState<Array<DataType>>([])
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const getlist = useCallback(() => {
        getBannerListApi().then(res => {
            //console.log('res', res);
            setBannerList(res.data)
        })
    }, [])
    useEffect(() => {
        getlist()
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: '序号',
            dataIndex: 'index', // 就是当前数据data 中对应的哪一个字段
            key: 'index', // 唯一索引    
            render: (text, record, index) => <a>{(current - 1) * pageSize + index + 1}</a>,
            align: 'center'
        },
        {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            align: 'center',
            width: 200,
            render: (text, record, index) => {
                return <Image src={text} width='100%'></Image>
            }
        },
        {
            title: '链接',
            dataIndex: 'link',
            key: 'link',
            align: 'center',
        },
        {
            title: '提示',
            dataIndex: 'alt',
            key: 'alt',
            align: 'center',
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record, index) => (
                <Space size="middle">
                    <Popconfirm
                        title="提示"
                        description="确认要删除吗?"
                        onConfirm={(e: any) => {
                            // 点击确认操作
                            deleteBannerApi({
                                bannerid: record.bannerid
                            }).then((res: any) => {
                                messageApi.open({
                                    type: res.code == 200 ? 'success' : 'error',
                                    content: res.message,
                                    duration: 1,
                                    onClose() {
                                        getlist()
                                    }
                                })
                            })
                        }}
                        okText="Yes"
                        cancelText="No">
                        <Button type="primary" danger>删除</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ];
    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            {contextHolder}
            <Button
                icon={<PlusOutlined />}
                type='primary'
                onClick={() => {
                    // 跳转到添加轮播图页面
                    navigate('/banner/addbanner')
                }}
            >添加轮播图</Button>
            <Table
                columns={columns}
                rowKey={(record: DataType) => record.bannerid}
                dataSource={bannerList}
                pagination={{
                    position: ['bottomRight'],
                    current: current,
                    pageSize: pageSize,
                    pageSizeOptions: [2, 4, 8, 10],
                    showQuickJumper: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => `共${total}条`,
                    total: bannerList.length,
                    onChange(page, pageSize) {
                        // console.log(page);
                        // console.log(pageSize);
                        setCurrent(page)
                        setPageSize(pageSize)
                    }
                }}
            />

        </Space>
    )
}