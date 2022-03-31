<script lang="ts" setup>
import { useSidebarStore } from "@/store/sidebar";
</script>

<template>
  <min-body class="bg-primary">
    <App-Sidebar class="bg-secondary" fill />
    <min-app class="p-0 bg-primary" fill scroll-y>
      <App-Header />
      <min-main class="p-0 overflow-visible" noshrink>
        <min-container class="gap-48 px-24 md:px-0">
          <router-view></router-view>
        </min-container>
      </min-main>
      <App-Footer />
    </min-app>
    <min-overlays>
      <hr class="cursor-pointer bg-black-500 opacity-50" fill @click="useSidebarStore().off()" v-if="useSidebarStore().state" />
    </min-overlays>
  </min-body>
</template>
