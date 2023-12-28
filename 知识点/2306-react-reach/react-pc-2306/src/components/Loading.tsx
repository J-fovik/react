import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
const Center = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
enum sizeType {
    small = 'small',
    large = 'large',
    default = 'default'
}
type Props = {
    tip?: string,
    size?: sizeType
}

export default function Loading({ tip, size }: Props) {
    const title = tip ? tip : 'Loading'
    const sizeContent = size ? size : 'large'
    return (
        <Center>
            <Spin tip={title} size={sizeContent}>
                <div style={{
                    padding: '50px',
                    borderRadius: '4px'
                }} />
            </Spin>
        </Center>
    )
}