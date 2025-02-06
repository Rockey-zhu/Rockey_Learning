import service from "..";
//获取歌单详情页内容
export function getMusicItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}

//获取歌单的所有歌曲
export function getItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}

//获取歌单的歌词 
export function getMusicLyric(data) {
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}

//获取歌曲mv视频
export function getMusicMv(data) {
    return service({
        method: "GET",
        url: `/mv/url?id=${data}`,
    })
}