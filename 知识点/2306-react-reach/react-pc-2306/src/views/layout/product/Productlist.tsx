import React from 'react'
import { getProListApi, updateFlagApi } from '@/api/product'
import { useEffect, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import {
    Button,
    Space,
    Table,
    Image,
    message,
    Popconfirm,
    Switch,
    Typography
} from 'antd'
// 引入lodash 中 的 uniqWith 方法实现数组的去重
import { uniqWith, isEqual } from 'lodash'
const { Paragraph, } = Typography;
type Props = {}
interface DataType {
    brand: string,
    category: string,
    desc: string,
    discount: number,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    isrecommend: number,
    issale: number,
    isseckill: number,
    originprice: number,
    proid: string,
    proname: string,
    sales: number
}
export default function Productlist({ }: Props) {
    // 当前第几页
    const [count, setCount] = useState<number>(1);
    // 每页数据条数
    const [limitNum, setLimitNum] = useState<number>(10)
    // 定义产品列表数组
    const [prolist, setProList] = useState<DataType[]>([]);
    // 定义数据的总条数
    const [total, setTotal] = useState(0)
    const [messageApi, contextHolder] = message.useMessage()
    const getprolist = () => {
        getProListApi({ count, limitNum }).then((res: any) => {
            // console.log(res);
            setProList(res.data)
            setTotal(res.total)
        })
    }
    useEffect(() => {
        getprolist()
    }, [count, limitNum])

    const columns: ColumnsType<DataType> = [
        {
            title: '序号',
            dataIndex: 'index', // 就是当前数据data 中对应的哪一个字段
            key: 'index', // 唯一索引    
            render: (text, record, index) => <a>{(count - 1) * limitNum + index + 1}</a>,
            align: 'center'
        },
        {
            title: '图片',
            dataIndex: 'img1',
            key: 'img1',
            align: 'center',
            width: 100,
            render: (text, record, index) => {
                return <Image src={text} width='100%'></Image>
            }
        },
        {
            title: '名称',
            dataIndex: 'proname',
            key: 'proname',
            align: 'center',
            render: (text) => {
                return <Paragraph
                    ellipsis={{ rows: 2 }}>
                    {text}
                </Paragraph>
            }
        },
        {
            title: '品牌',
            dataIndex: 'brand',
            key: 'brand',
            align: 'center',
        },
        {
            title: '分类',
            dataIndex: 'category',
            key: 'category',
            align: 'center',
            // filters: [
            //     { text: 'Joe', value: 'Joe' },
            //     { text: 'Jim', value: 'Jim' },
            // ],
            filters: uniqWith(prolist.map((item: DataType) => ({ text: item.category, value: item.category })), isEqual),
            onFilter: (value: any, record) => {
                // console.log('value', value);
                return record.category.includes(value)
            }

        },
        {
            title: '原价',
            dataIndex: 'originprice',
            key: 'originprice',
            align: 'center',
            sorter: (a, b) => a.originprice - b.originprice,


        },
        {
            title: '折扣',
            dataIndex: 'discount',
            key: 'discount',
            align: 'center',
            sorter: (a, b) => a.discount - b.discount,
        },
        {
            title: '销量',
            dataIndex: 'sales',
            key: 'sales',
            align: 'center',
            sorter: (a, b) => a.sales - b.sales,
        },
        {
            title: '是否售卖',
            dataIndex: 'issale',
            key: 'issale',
            align: 'center',
            render(text, record, index) {
                return <Switch
                    checkedChildren="是"
                    unCheckedChildren="否"
                    checked={text}
                    onChange={(checked: boolean, event: any) => {
                        // console.log('checked', checked);
                        updateFlagApi({
                            proid: record.proid,
                            type: 'issale',
                            flag: checked
                        }).then((res: any) => {
                            getprolist();
                            messageApi.open({
                                type: res.code == 200 ? 'success' : 'error',
                                content: res.message,
                                duration: 1,
                            })
                        })
                    }}
                />
            }
        },
        {
            title: '是否秒杀',
            dataIndex: 'isseckill',
            key: 'isseckill',
            align: 'center',
            render(text, record, index) {
                return <Switch
                    checkedChildren="是"
                    unCheckedChildren="否"
                    checked={text}
                    onChange={(checked: boolean, event: any) => {
                        // console.log('checked', checked);
                    }}
                />
            }
        },
        {
            title: '是否推荐',
            dataIndex: 'isrecommend',
            key: 'isrecommend',
            align: 'center',
            render(text, record, index) {
                return <Switch
                    checkedChildren="是"
                    unCheckedChildren="否"
                    checked={text}
                    onChange={(checked: boolean, event: any) => {
                        // console.log('checked', checked);
                    }}
                />
            }
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
        <>
            {contextHolder}
            <Table
                columns={columns}
                rowKey={(record: DataType) => record.proid}
                dataSource={prolist}
                scroll={{ y: 500 }}
                pagination={{
                    position: ['bottomRight'],
                    current: count,
                    pageSize: limitNum,
                    pageSizeOptions: [10, 20, 30],
                    showQuickJumper: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => `共${total}条`,
                    total: total,
                    onChange(page, pageSize) {
                        // console.log(page);
                        // console.log(pageSize);
                        setCount(page)
                        setLimitNum(pageSize)
                    }
                }}
            />
        </>
    )
}