import { createApp } from "vue";
import App from "@/organisms/App/App.vue";
import router from "@/router";
import store from "@/store";
import "@/styles/main.scss";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaTimes, FaBars, FaCoffee, FaHeart } from "oh-vue-icons/icons";

addIcons(FaTimes, FaBars, FaCoffee, FaHeart);

const app = createApp(App);

app.use(store).use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
