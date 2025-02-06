export default {
    state: {
        tabs: [], //储存表单数据
        // logs: "csss"
    },
    getters: {

    },
    actions: {},
    mutations: {
        setTabs(
            state, {
                tabs,
                // logs
            },
        ) {
            if (tabs != undefined)
                state.tabs = tabs;

        }
    }

}