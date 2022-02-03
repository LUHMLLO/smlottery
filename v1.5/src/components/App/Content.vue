<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <min-content>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="route.fullPath" />
    </router-view>
  </min-content>
</template>
