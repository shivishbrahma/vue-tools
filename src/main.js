import { createApp } from "vue";
import App from "@/organisms/App/App.vue";
import router from "@/router";
import store from "@/store";
import "@/styles/main.scss";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaTimes, FaBars, FaCoffee, FaHeart, FaMoon, FaSun, FaChevronDown, FaChevronUp } from "oh-vue-icons/icons";

addIcons(FaTimes, FaBars, FaCoffee, FaHeart, FaMoon, FaSun, FaChevronUp, FaChevronDown);

const app = createApp(App);

app.use(store).use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
