import { createStore } from "vuex";

export default createStore({
    state: {
        appTheme: "dark",
        appTitle: "Vue Tools",
        appName: "KodaKriti"
    },
    getters: {},
    mutations: {
        setAppTheme(state, { appTheme }) {
            state.appTheme = appTheme;
        },
        setAppTitle(state, { appTitle }) {
            state.appTitle = appTitle;
        }
    },
    actions: {
        toggleAppTheme({ commit, state }) {
            commit("setAppTheme", { appTheme: state.appTheme == "dark" ? "light" : "dark" });
        }
    },
    modules: {}
});
