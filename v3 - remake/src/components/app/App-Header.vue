<script lang="ts" setup>
import { useSidebarStore } from "@/store/sidebar";
</script>

<template>
  <min-header class="px-0 py-48">
    <min-container class="px-24 md:px-0">
      <min-row content="center" items="center" class="gap-12">
        <min-row content="start" items="center" class="gap-12">
          <i class="uil-analytics font-xl color-accent" style="transform: rotate(90deg)" @click="useSidebarStore().on()" />
          <h4 class="font-xl bold color-tertiary">Dashboard</h4>
        </min-row>
        <min-row content="end" items="center" class="gap-12">
          <i class="uil-sunset font-xl color-yellow-500" />
        </min-row>
      </min-row>
    </min-container>
  </min-header>
</template>
