import "./assets/icons/icons.css"
import "./assets/main.css";
import "./assets/scss/style.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
