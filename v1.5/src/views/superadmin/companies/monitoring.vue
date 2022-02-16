<route lang="yaml">
name: "Monitoring"
</route>

<script setup lang="ts">
//vueuse
useHead({
  title: "smlottery - create client",
});

//scroll event target
//const target_scroll = ref<null | HTMLDivElement>(null);

//tabs interface
interface tabsInterface {
  [key: string]: boolean;
}

//tabs object using Reactive from vue 3 composition api
const tabs = reactive<tabsInterface>({
  details: true,
  tickets: false,
  raffles: false,
  licenses: false,
  security: false,
});

//toggle the tabs
function toggleTabs(adquiredKeyName: string): void {
  Object.entries(tabs).forEach(([key]) => {
    if (adquiredKeyName == key) {
      tabs[key] = true;
    } else {
      tabs[key] = false;
    }
  });
}
</script>

<template>
  <min-column class="bg-primary p-48 gap-24">
      <Forms-Companies-Monitoring />
  </min-column>
</template>
