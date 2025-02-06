const getters = {
    getNum(state) {
        return state.number
    },
    getCount(state) {
        return state.count
    },
    getToById: (state) => {
        return state.todos.find(todo => todo.id === id)
    }
}
export default getters