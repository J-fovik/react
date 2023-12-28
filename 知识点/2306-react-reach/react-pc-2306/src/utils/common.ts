//  定义公共的函数 可以实现复用

// 方法1: 使用routes 数组结构生成一个
// const breadcrumbNameMap: Record<string, string> = {
//     '/home': '首页',
//     '/account': '账户管理',
//     '/account/adminlist': '管理员列表',
//     '/banner': '轮播图管理',
//     '/banner/bannerlist': '轮播图列表',
// };

const breadcrumbNameMap: Record<string, string> = {}
export function getbreadcrumbNameMapFn(routes: any) {
    routes.forEach((item: any) => {
        if (item.label) {
            breadcrumbNameMap[item.path] = item.label
            if (item.children) {
                getbreadcrumbNameMapFn(item.children)
            }
        }
    })
    return breadcrumbNameMap
}


// 方法2: 获得treeData 的数据结构, 用来渲染属性菜单

export function getTreeDataFn(routes: any) {
    const newArr = routes.map((item: any) => {
        // 判断当有item.key 有属性值时, 证明当前该路由需要添加成左侧菜单项
        if (item.key) {
            if (item.children) {
                return {
                    title: item.label,
                    key: item.key,
                    children: getTreeDataFn(item.children) //使用递归
                }
            } else {
                return {
                    title: item.label,
                    key: item.key,
                }
            }
        }

        //没有key的item项 返回undefined
    })

    return newArr.filter((v: any) => v)
}


// 方法3:
// 希望将如下后端返回的权限菜单, 转成可以渲染的菜单数组routes的结构
export function getNewcheckedkeysFn(checkedkeys: string[]) {
    const newcheckedkeys: Array<string> = [];
    checkedkeys.forEach(item => { // /home, /account, /account/adminlist
        const arr = item.split('/').filter(i => i) // [home]  [account] , [account,adminlist]
        let newpath = '';
        arr.forEach(item1 => {
            newpath += '/' + item1  // /home, /account, /account, /account/adminlist
            newcheckedkeys.push(newpath)
        })
    })
    return Array.from(new Set(newcheckedkeys))
}

// 方法4: 根据newcheckedkeys 这个新的菜单权限数组, 对 routes这个路由数组进行删减
// 得到最新的routes
// 注意: 使用倒叙删除, 否则由于正序下表塌陷删除有bug
export function getNewRoutes(newcheckedkeys: Array<string>, routes: Array<any>) {
    // routes.forEach((item, index) => {
    //     if (!newcheckedkeys.includes(item.path)) {
    //         routes.splice(index, 1)
    //     };

    //     if (item.children) {
    //         getNewRoutes(newcheckedkeys, item.children)
    //     }
    // })
    for (let i = routes.length - 1; i >= 0; i--) {
        let item = routes[i];
        if (!newcheckedkeys.includes(item.path)) {
            routes.splice(i, 1)
        }

        if (item.children) {
            getNewRoutes(newcheckedkeys, item.children)
        }
    }

    return routes
}



// newcheckedkeys: [
//     '/home',
//     '/account',
//     '/account/adminlist',
//     '/banner',
//     '/banner/bannerlist',
//     '/product',
//     '/product/productlist', // 缺一个 /product
//     '/product/filterlist'
//   ],

// export const routes = [
//     {
//         path: '/home', // 二级路由
//         element: <Home></Home>, / / 二级组件
//         label: '首页',
//         key: '/home'
//     },
//     {
//         path: '/account',
//         element: <Account></Account>,
//         label: '账户管理',
//         key: '/account',
//         children: [
//             {
//                 path: '/account/adminlist',
//                 element: <Adminlist></Adminlist>,
//                 label: '管理员列表',
//                 key: '/account/adminlist',
//             }
//         ]
//     },]