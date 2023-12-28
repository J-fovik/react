import Son from './Son'

const Father=()=> {

    const footbalGirls = ['孙雯', '刘爱玲', '水庆霞'];
    return (
    <div>
        <p>我是函数父组件</p>  
        <Son footbalGirls={footbalGirls}></Son>

     
    </div>
    )
    
}

export default Father;
