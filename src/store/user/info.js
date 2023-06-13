export default {
    namespaced: true,
    state: {
        userInfo: {},  //用户信息
    },
    getters: {

    },
    mutations: {
        // 设置用户信息
        setUserInfo(state, value) {
            state.userInfo = value
        },
    },
    actions: {
        
    }
}