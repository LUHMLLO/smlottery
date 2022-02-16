import "mindesignsystem";
// import "../../../mindesignsystem/src/sass-framework/sass/core/main.scss";
// import "../../../mindesignsystem/src/sass-framework/sass/classes/main.scss";
import "@/sass/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import router from "@/router";
import { i18n } from "@/locales/i18n";
import VueApexCharts from "vue3-apexcharts";
import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(createHead());
app.use(router);
app.use(i18n);
app.use(VueApexCharts);
app.mount("#app");
