import React from 'react'
// 首页
import { Layout } from 'antd';
// 导入左侧组件
import Appside from '@/components/Appside';
import Appheader from '@/components/Appheader';
import Appmain from '@/components/Appmain';
type Props = {}

export default function Index({ }: Props) {

    return (
        <Layout style={{
            height: '100%'
        }}>
            {/* 左侧组件 */}
            <Appside></Appside>
            <Layout>
                {/* 头部组件 */}
                <Appheader></Appheader>
                {/* 右侧主体部分 */}
                <Appmain></Appmain>
            </Layout>
        </Layout>
    )
}