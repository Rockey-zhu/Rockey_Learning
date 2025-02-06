// function getUrlParams(key) {
//      // 从 window.location.href 获取当前URL
//     const url = window.location.href;

//     // 分解URL获取查询字符串部分
//     const queryString = url.split('?')[1];

//     // 用 & 分割查询字符串获取各个参数
//     const params = queryString.split('&');

//     // 使用map遍历params，将每个param转化为键值对
//     const result = params.map(param => {
//         const keyValue = param.split('=');
//         return {
//             [keyValue[0]]: keyValue[1]
//         };
//     });

//     return result;
// }

function getUrlParamValue(key) {
    // 从 window.location.href 获取当前URL
    // const url = window.location.href;
    const url = 'https://qs.syngentachina.com/nonesso/extensions/WARROOMMAPMobile_Test0716/index.html#/olmapcode?FormId=8eee6053-b423-4a95-b433-3ddad1d23791&FormName=CPD_Project试验跟踪系统&FormId=11&FormName=cpd111'

    // 获取查询字符串部分，即 ? 后面的部分
    const queryString = url.split('?')[1];
    console.log("queryString", queryString);
    // 用 & 分割查询字符串获取各个参数
    const params = queryString.split('&');
    console.log("queryString", params);
    // 遍历参数，查找匹配的key
    for (let param of params) {
        const keyValue = param.split('=');
        console.log("keyValue", keyValue);
        if (keyValue[0] === key) {
            return keyValue[1];
        }
    }

    // 如果没有找到对应的key，返回提示信息
    console.log('没有找到对应的参数：' + key);
    return null;
}

// 示例使用，传入要查询的key
console.log(getUrlParamValue("FormId"));