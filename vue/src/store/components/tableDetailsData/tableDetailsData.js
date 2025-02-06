export default {
    state: {
        tableRowDatas: [], //储存表单数据
        // logs: "csss"
    },
    getters: {

    },
    actions: {},
    mutations: {
        setTableDetailsData(
            state, {
                tableRowDatas,
                // logs
            },
        ) {
            if (tableRowDatas != undefined)
                state.tableRowDatas = tableRowDatas;

        }
    }

}