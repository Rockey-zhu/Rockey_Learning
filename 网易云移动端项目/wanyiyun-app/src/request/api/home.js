import service from "..";
//获取首页轮播图的数据
export function getBanner() {
    return service({
        method: "GET",
        url: '/banner?type=2'
    })
}

//获取发现好歌单
export function getMusicList() {
    return service({
        method: "GET",
        url: '/personalized?limit=10'
    })
}

//搜索
export function getSearchMusic(data) {
    return service({
        method: "GET",
        url: `/cloudsearch?keywords=${data} `,
    })
}

//登录/login?email=xxx@163.com&password=yyy
export function getEmailLogin(data) {
    return service({
        method: "GET",
        url: `/login?email=${data.email}&password=${data.password}`
    })
}

// //获取用户详情
export function getLoginUser(data) {
    return service({
        method: "GET",
        url: `/user/detail?uid=${data}`
    })
}


//更新用户信息
// export function getUserInformation() {
//     return service({
//         method: "GET",
//         url: `/user/subcount`
//     })
// }