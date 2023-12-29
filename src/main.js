import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./TheHeader";
import "./style.css";
const app = createApp(App);
app.component("the-header", TheHeader);
app.mount("#app");
