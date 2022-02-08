<script setup lang="ts">
import { useThemeStore } from "@/store/theme";

const theme = useThemeStore();

useHead({
  title: "SMLottery",
});

onBeforeMount(() => {
  theme.check();
});
</script>

<template>
  <min-body>
    <min-app>
      <AppHeader />
      <AppMain fill>
        <AppSidebar scroll-y fill />
        <AppContent scroll-y fill />
      </AppMain>
    </min-app>
    <min-overlays>
      <AppFloatingSidebar />
    </min-overlays>
  </min-body>
</template>
