import React from 'react';
import {
    Button,
    Space,
    Table,
    Tag,
    Drawer,
    Input,
    Select,
    Tree,
    message,
    Popconfirm
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
// 引入接口
import { getAdminListApi } from '@/api/account'
import { useEffect, useState, useCallback } from 'react'
// 引入图标
import { PlusOutlined } from '@ant-design/icons';
import type { DataNode } from 'antd/es/tree';
import { getTreeDataFn } from '@/utils/common'
import { routes } from '@/router/Index'
// 导入接口
import {
    addAdminApi,
    updateAdminApi,
    deleteAdminApi
} from '@/api/adminlist';

// 引入自定义hook已经处理好类型的hook 
import { useAppSelector } from '@/store/hooks'
type Props = {}
// 定义的数组中每一个对象的类型
interface DataType {
    adminid: string;
    adminname: string;
    checkedKeys: Array<any>;
    role: number,
    password: string
}

export default function Adminlist({ }: Props) {
    const [messageApi, contextHolder] = message.useMessage();
    // 用户列表数组
    const [userlist, setUserList] = useState<Array<DataType>>([]);
    // 分页当前页数
    const [current, setCurrent] = useState(1)
    // 每页数据的条数
    const [pageSize, setPageSize] = useState(2);
    // 设置抽屉是否打开
    const [open, setOpen] = useState(false);
    // 当前是添加还是编辑
    const [isadd, setIsAdd] = useState(true)
    // 用户名
    const [adminname, setAdminName] = useState('');
    // 密码
    const [password, setPassword] = useState('')
    // 角色
    const [role, setRole] = useState<number>(1);
    // 选中的树形节点数组
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['/home']);
    // 获取rtk中的角色信息
    const currentRole = useAppSelector(state => state.users.role)

    // 获取用户数据列表方法
    // useCallback 语法:  const 函数名= useCallBack(()=>{},[变量1,变量2,...])
    const getuserlist = useCallback(() => {
        getAdminListApi().then(res => {
            // console.log(res);
            setUserList(res.data)
        })
    }, [])

    useEffect(() => {
        getuserlist()
    }, []);

    const columns: ColumnsType<DataType> = [
        {
            title: '序号',
            dataIndex: 'index', // 就是当前数据data 中对应的哪一个字段
            key: 'index', // 唯一索引    
            render: (text, record, index) => <a>{(current - 1) * pageSize + index + 1}</a>,
            // text 表示当前行的值 , reacord 表但当前行对应的对象, index 当前行的索引
            align: 'center'
        },
        {
            title: '姓名',
            dataIndex: 'adminname',
            key: 'adminname',
            align: 'center',
            // render: (text, record, index) => {
            //     console.log('text', text);
            //     console.log('record', record);
            //     return <a>{text}</a>
            // },
        },
        {
            title: '权限',
            dataIndex: 'role',
            key: 'role',
            align: 'center',
            render: (text, record: DataType, index) => {
                if (record.role == 1) {
                    return <Tag color="blue">管理员</Tag>
                }
                if (record.role == 2) {
                    return <Tag color="red">超级管理员</Tag>
                }
                return <Tag color="green">其他用户</Tag>
            },
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record, index) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => {
                        //01: 显示抽屉
                        setOpen(true);
                        // /console.log('record', record);
                        // 修改状态
                        setIsAdd(false)
                        // 数据回填;
                        setAdminName(record.adminname);
                        setPassword(record.password)
                        setRole(record.role);
                        //console.log('record.checkedKeys', record.checkedKeys);
                        setCheckedKeys(record.checkedKeys);
                    }}>编辑</Button>
                    <Popconfirm
                        title="提示"
                        description="确认要删除吗?"
                        onConfirm={(e: any) => {
                            deleteAdminApi({
                                adminid: record.adminid
                            }).then((res: any) => {
                                messageApi.open({
                                    type: res.code == 200 ? 'success' : 'error',
                                    content: res.message,
                                    duration: 1,
                                    onClose() {
                                        //03: 重新获取用户列表
                                        getuserlist()
                                    }
                                });
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
    // 获取属性菜单的数据;
    const treeData: DataNode[] = getTreeDataFn(routes);
    // console.log('treeData', treeData);


    // 修改选中的节点数组触发的函数
    const onCheck = (checkedKeysValue: any) => {
        //console.log('onCheck', checkedKeysValue);
        // 赋值给树形菜单数据
        setCheckedKeys(checkedKeysValue);
    };
    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            {contextHolder}
            <Button
                icon={<PlusOutlined />}
                type='primary'
                onClick={() => {
                    // 判断当前 用户是否是超级管理员,只有超级管理员才可以添加用户
                    if (currentRole == 1) {
                        messageApi.open({
                            type: 'warning',
                            content: '您没有添加权限!!!',
                            duration: 2
                        })
                        return
                    }

                    // 01: 显示抽屉
                    setOpen(true);
                    // 02: 修改状态
                    setIsAdd(true)
                    // 清理输入的历史记录
                    setAdminName('');
                    setPassword('');
                    setCheckedKeys(['/home']);
                    setRole(1)

                }}
            >添加用户</Button>
            <Table
                columns={columns}
                rowKey={(record: DataType) => record.adminid}
                dataSource={userlist}
                pagination={{
                    position: ['bottomRight'],
                    current: current,
                    pageSize: pageSize,
                    pageSizeOptions: [2, 4, 8, 10],
                    showQuickJumper: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => `共${total}条`,
                    total: userlist.length,
                    onChange(page, pageSize) {
                        // console.log(page);
                        // console.log(pageSize);
                        setCurrent(page)
                        setPageSize(pageSize)
                    }
                }}
            />
            {/* 抽屉组件 */}
            <Drawer title={isadd ? '添加用户' : '编辑用户'}
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <Space direction='vertical' style={{ width: '100%' }}>
                    <div>
                        <Input placeholder="用户名" value={adminname} onChange={(e) => {
                            setAdminName(e.target.value)
                        }} />
                    </div>
                    <div>
                        <Input placeholder="密码" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <div>
                        <Select
                            value={role}
                            placeholder='角色选择'
                            style={{ width: '100%' }}
                            onChange={(value: number) => {
                                // console.log('value', value);
                                setRole(value)
                            }}
                            options={[
                                { value: 1, label: '管理员' },
                                { value: 2, label: '超级管理员' },
                            ]}
                        />
                    </div>
                    {/* 树形菜单 */}
                    <p style={{ fontSize: '14px', margin: '10px  0' }}>请选择权限菜单:</p>
                    <Tree
                        checkable
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                        treeData={treeData}
                    />
                    {/* 底部确认按钮 */}
                    <Space style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px'
                    }}>
                        <Button type='primary'>取消</Button>
                        {isadd ?
                            <Button type='primary' onClick={() => {
                                console.log({
                                    adminname,
                                    password,
                                    role,
                                    checkedKeys
                                });

                                // 添加确认
                                addAdminApi({
                                    adminname,
                                    password,
                                    role,
                                    checkedKeys
                                }).then((res: any) => {
                                    // console.log('res', res);
                                    // 01: 关闭抽屉
                                    setOpen(false)
                                    // 02: 提示
                                    messageApi.open({
                                        type: res.code == 200 ? 'success' : 'error',
                                        content: res.message,
                                        duration: 1,
                                        onClose() {
                                            //03: 重新获取用户列表
                                            getuserlist()
                                        }
                                    });
                                })
                            }}>添加确认</Button> :
                            <Button type='primary' onClick={() => {
                                updateAdminApi({
                                    adminname,
                                    password,
                                    role,
                                    checkedKeys
                                }).then((res: any) => {
                                    // 01: 关闭抽屉
                                    setOpen(false)
                                    // 02: 提示
                                    messageApi.open({
                                        type: res.code == 200 ? 'success' : 'error',
                                        content: res.message,
                                        duration: 1,
                                        onClose() {
                                            //03: 重新获取用户列表
                                            getuserlist()
                                        }
                                    });
                                })
                            }}>编辑确认</Button>
                        }
                    </Space>
                </Space>
            </Drawer >
        </Space >
    )
}