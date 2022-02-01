<script setup lang="ts">
//router
const route = useRoute();

//vueuse
useHead({
  title: `smlottery - ${route.meta.name}`,
});
</script>

<template>
  <min-body>
    <min-app scroll-y>
      <AppHeader />
      <AppMain fill>
        <AppSidebar />
        <AppContent />
      </AppMain>
    </min-app>
    <min-overlays> </min-overlays>
  </min-body>
</template>
