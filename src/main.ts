import "mindesignsystem";
import "@/sass/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from '@vueuse/head'

import router from "@/router";
import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(createHead())
app.use(router);
app.mount("#app");
