import { createStore } from "vuex";

export default createStore({
    state: {
        appTheme: "dark"
    },
    getters: {},
    mutations: {
        setAppTheme(state, { appTheme }) {
            state.appTheme = appTheme;
        }
    },
    actions: {
        toggleAppTheme({ commit, state }) {
            commit("setAppTheme", { appTheme: state.appTheme == "dark" ? "light" : "dark" });
        }
    },
    modules: {}
});
