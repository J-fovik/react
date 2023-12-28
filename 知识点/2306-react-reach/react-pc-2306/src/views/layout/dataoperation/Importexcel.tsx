
import { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { ArrowUpOutlined } from '@ant-design/icons';
import {
    Button,
    Space,
    Table,
    Image,
    Popconfirm,
    Typography
} from 'antd'
// 引入lodash 中 的 uniqWith 方法实现数组的去重
import { uniqWith, isEqual } from 'lodash';
// 导入第三方的包 用来实现数据的导入
import { read, utils } from 'xlsx';
console.log('read', read);

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
    const [total, setTotal] = useState(0);

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

    // 定义选择文件触发的函数
    const changeFileFn = () => {
        // console.log(123);
        // 01: 获取当前选中上传的文件
        let file = (document.querySelector('#fileinp') as any).files[0]
        //console.log('file', file);
        // 02: 创建读取器
        const reader = new FileReader();
        // 03: 将excel文件读取成 二进制格式
        reader.readAsBinaryString(file)
        // 04: 监听读取完成触发的事件 load 事件
        reader.onload = function () {
            // console.log(this.result);
            // 05:使用xlsx 这个包去读取上传后的二进制表格文件
            const workbook = read(this.result, { type: 'binary' });
            // console.log('workbook', workbook);
            // 06: 获取上传的文件产品列表中某一个表信息数据
            const data = workbook.Sheets['表1'];
            console.log('data', data);
            // 07: 将表1表格数据转层json 格式
            let list: DataType[] = utils.sheet_to_json(data)
            console.log('list', list);
            // 08: 接下来将获取到的list 数据通过接口传递给后端, 后端获取数据后, 写入的数据库中
            // 实现文件的上传   
            setProList(list)

        }

    }
    return (
        <>
            <Button type='primary'
                icon={<ArrowUpOutlined />}
                onClick={() => {
                    // 点击数据导入
                    let inpfile = document.querySelector('#fileinp') as HTMLInputElement
                    inpfile.click()
                    // console.log('inpfile', inpfile);

                }}
            ></Button>
            <input type='file' style={{ display: 'none' }} id='fileinp' onChange={changeFileFn} />
            <Table
                columns={columns}
                rowKey={(record: DataType) => record.proname}
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