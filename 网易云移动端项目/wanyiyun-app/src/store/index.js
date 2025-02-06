import {
    getMusicLyric,
    getMusicMv
} from '@/request/api/item'
import {
    createStore
} from 'vuex'
import {
    getEmailLogin
} from "@/request/api/home.js"

export default createStore({
    state: {
        playList: [{ //播放列表
            al: {
                // id: 78232124,
                // name: "初遇",
                // pic: 109951163957708690,
                // picUrl: "https://p1.music.126.net/1iLwRvMtUMYLZUNR-HQW7Q==/109951163957708692.jpg",
                // pic_str: "109951163957708692",
                id: 36789845,
                name: "只只",
                pic: 109951163063456210,
                picUrl: "https://p2.music.126.net/2pFqN1pyqF2DHdSt1hQ10Q==/109951163063456206.jpg",
                pic_str: "109951163063456206",
            },
            // id: 1336856864,
            // name: "形容"
            id: 519136840,
            name: "只只",
            ar: [{
                name: "孟凡明"
            }],
            mvId: ""
        }],
        playListIndex: 0, //默认下标为0
        isbtnShow: true, //暂停按钮的显示
        detailShow: false, //歌曲详情页
        lyricList: {}, //歌词
        currentTime: 0, //当前时间
        duration: 0, //歌曲总时长
        isLogin: false, //判断是否登录
        isFooterMusic: true, //判断底部组件是否显示
        token: "",
        user: {}, //用户信息
    },
    getters: {},
    mutations: {
        updateIsbtnShow: function (state, value) {
            state.isbtnShow = value
        },
        pushPlayList: function (state, value) {
            state.playList.push(value)
        },
        updatePlayList: function (state, value) {
            state.playList = value
            console.log(state.playList)
        },
        updatePlayListIndex: function (state, value) {
            state.playListIndex = value
            console.log(state.PlayListIndex)
        },
        updateDetailShow: function (state) {
            state.detailShow = !state.detailShow
        },
        updateLyricList: function (state, value) {
            state.lyricList = value
        },
        updateCurrentTime: function (state, value) {
            // console.log("state.currentTime", this.state.currentTime)
            state.currentTime = value
        },
        updateDuration: function (state, value) {
            state.duration = value
        },
        updateIsLogin: function (state, value) {
            state.isLogin = true
        },
        updateToken: function (state, value) {
            state.token = value
            localStorage.setItem('token', state.token)
        },
        updateUser: function (state, value) {
            state.user = value
        },
        updateMv: function (state, value) {
            state.Mv = value
        }
    },
    actions: {
        getLyric: async function (context, value) {
            let res = await getMusicLyric(value)
            console.log("getMusicLyric", res)
            context.commit("updateLyricList", res.data.lrc)
        },
        getLogin: async function (context, value) {
            let res = await getEmailLogin(value);
            console.log(res)
            return res
        }
    },
    modules: {}
})