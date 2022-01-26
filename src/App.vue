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
      <min-content items="center" class="h-auto overflow-visible">
        <min-container class="gap-32">
          <router-view />
        </min-container>
      </min-content>
    </min-app>
    <min-overlays>
      <AppSidebar />
    </min-overlays>
  </min-body>
</template>
