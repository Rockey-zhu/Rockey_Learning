export default {
    state: {
        copy_tab: []
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        putTabs(
            state, {
                copy_tab,
                // logs

            },
        ) {
            if (copy_tab != undefined)
                state.copy_tab = copy_tab;

        }
    }

}