<script setup lang="ts">
import { useThemeStore } from "@/store/theme";

const theme = useThemeStore();
const route = useRoute();

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
      <min-main class="flex-row p-0" fill>
        <AppSidebar />
        <min-content class="p-48 gap-24" fill scroll-y>
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="route.fullPath" />
          </router-view>
        </min-content>
      </min-main>
    </min-app>
    <min-overlays>
      <AppFloatingSidebar />
    </min-overlays>
  </min-body>
</template>
