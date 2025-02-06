import mutationTypes from './mutation-types'

const mutations = {
    addNumber(state) {
        state.number = state.number + 1;
    },

    [mutationTypes.ADD_GOODS](state, info) { //接受actions传过来的参数
        let isOwn = state.shopList.some(function(item) {
            if (item.id == info.id) {
                if (item.inventory != 0) {
                    item.num++;
                    item.inventory--;
                }
                return true;
            } else {
                return false;
            }
        });

        if (!isOwn) {
            state.shopList.push({ id: info.id, name: info.name, price: info.price, inventory: info.inventory - 1, num: 1 });
        }
    },
    [mutationTypes.ADD_NUM](state, index) {
        if (state.shopList[index].inventory != 0) {
            state.shopList[index].num++;
            state.shopList[index].inventory--;
        }
    },
    [mutationTypes.REDUCE_NUM](state, index) {
        if (state.shopList[index].num == 0) {
            state.shopList.splice(index, 1);
        } else {
            state.shopList[index].num--;
            state.shopList[index].inventory++;
        }
    },
    [mutationTypes.DELETE_GOODS](state, index) {
        state.shopList.splice(index, 1);
    },
    [mutationTypes.CLEAR_SHOP_CART](state) {
        state.shopList = [];
    },
}
export default mutations;