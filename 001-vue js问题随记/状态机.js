{
    TbImPushonPageSizeChange({
        commit,
        state,
        rootState
    }, {
        pageSize
    }); {
        commit("setTbImPush", {
            pageSize: pageSize
        });
    }

}

// 这段代码会将传入的pageSize作为参数，通过commit方法触发setTbImPush这个mutation，
// 并传入一个包含pageSize的对象作为参数，从而更新TbImPush的pageSize。