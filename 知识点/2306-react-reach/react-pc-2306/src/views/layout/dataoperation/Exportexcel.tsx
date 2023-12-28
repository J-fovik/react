
import React from 'react'
import { getProListApi, updateFlagApi } from '@/api/product'
import { useEffect, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { ArrowDownOutlined } from '@ant-design/icons'
import {
    Button,
    Space,
    Table,
    Image,
    Popconfirm,
    Switch,
    Typography
} from 'antd'
// 引入lodash 中 的 uniqWith 方法实现数组的去重
import { uniqWith, isEqual } from 'lodash'
// 导入第三方的包 用来实现数据的导出
import ExportJsonExcel from 'js-export-excel';

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
export default function Exportexcel({ }: Props) {
    // 当前第几页
    const [count, setCount] = useState<number>(1);
    // 每页数据条数
    const [limitNum, setLimitNum] = useState<number>(10)
    // 定义产品列表数组
    const [prolist, setProList] = useState<DataType[]>([]);
    // 定义数据的总条数
    const [total, setTotal] = useState(0)
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

    const exportFn = () => {

        // 设置导出excel 表格数据的格式
        var option = {
            fileName: '产品列表', // 导出的文件的文件名
            datas: [
                {
                    sheetData: prolist, // 定义导出的excel表的数据源
                    sheetName: "表1", // 表名称
                    sheetFilter: ["proname", "img1", "brand", "category", "originprice"], // 表示导出的数据字段(哪些字段要导出到excel)
                    sheetHeader: ["proname", "img1", "brand", "category", "originprice"], // 设置表头列名称
                    columnWidths: [20, 20], // 列宽
                },
                {
                    sheetData: prolist, // 定义导出的excel表的数据源
                    sheetName: "表2", // 表名称
                    sheetFilter: ["proname", "brand", "originprice"], // 表示导出的数据字段(哪些字段要导出到excel)
                    sheetHeader: ["proname", "brand", "originprice"], // 设置表头列名称
                    columnWidths: [20, 20], // 列宽
                },
            ]
        };

        var toExcel = new ExportJsonExcel(option); //new
        toExcel.saveExcel(); //保存
    }

    return (
        <>
            <Button type='primary'
                icon={<ArrowDownOutlined />}
                onClick={exportFn}
            >数据导出</Button>
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