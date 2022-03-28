<script setup lang="ts">
const options = {
  chart: {
    sparkline: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },

    markers: {
      size: 3,
    },

    colors: ["#FF1654", "#247BA0"],

    stroke: {
      show: true,
      curve: "straight",
      width: [4, 4],
    },

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    dataLabels: {
      enabled: false,
    },
  },
};
const series = [
  {
    name: "Series A",
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
  },
  {
    name: "Series B",
    data: [20, 29, 37, 36, 44, 45, 50, 58],
  },
];
</script>

<template>
  <apexchart type="line" :options="options" :series="series" />
</template>
<!-- 
<style scoped>
@import url("../../../node_modules/apexcharts/dist/apexcharts.css");
</style> -->
