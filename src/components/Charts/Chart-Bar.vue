<script setup lang="ts">
import { BarChart } from "vue-chart-3";

import { Chart, BarController, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(
  BarController,
  CategoryScale,
  LinearScale,

  BarElement
);

const dataValues = ref([12, 14, 16, 18, 11, 13, 15]);

const data = computed(() => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Sales",
      data: dataValues.value,
      backgroundColor: "#dc322f",
    },
  ],
}));

const options = ref({
  responsive: true,
  plugins: {
    title: {
      text: "Line",
    },
  },
});
</script>

<template>
  <BarChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>
