import router from "./index"
import store from "../store/index"

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        let token = store.state.login.user.token;
        if (token) {
            next({
                name: "Login"
            })
        }
    } else {
        next();
    }
})