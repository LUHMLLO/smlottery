<script setup lang="ts">
//pinia
import { useSidebarStore } from "@/store/sidebar";
const sidebar = useSidebarStore();
</script>

<template>
  <min-header items="center" class="bg-dark">
    <min-container class="gap-32">
      <min-grid class="grid-2">
        <min-column content="center">
          <i class="uil uil-bars icon color-light" @click="sidebar.toggle" v-if="!sidebar.state"></i>
        </min-column>
        <min-column items="end">
          <min-row items="center" class="gap-8 w-auto">
            <min-avatar class>
              <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1" alt="avatar" />
            </min-avatar>
            <min-column>
              <h6 class="label color-light">Manuel Hernandez</h6>
              <a class="link">Loteria Veecar - Zona Florida</a>
            </min-column>
          </min-row>
        </min-column>
      </min-grid>
    </min-container>
  </min-header>
</template>
