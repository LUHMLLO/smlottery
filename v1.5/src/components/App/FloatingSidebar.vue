<script setup lang="ts">
//pinia
import { use_floating_sidebar_store } from "@/store/sidebar.floating";
const floating_sidebar = use_floating_sidebar_store();

const target_floating_sidebar = ref<null | HTMLDivElement>(null);
onClickOutside(target_floating_sidebar.value, () => floating_sidebar.toggle());
</script>

<template>
  <min-sidebar
    ref="target_floating_sidebar"
    class="bg-primary whitspace-nowrap depth-6-black-500 width-256 p-absolute top right bottom h-100"
    fill-block
    v-if="floating_sidebar.state"
  >
    <min-section>
      <header class="py-16 px-24">
        <h6 class="subheading uppercase">flaoting sidebar</h6>
      </header>
      <min-column>
        <button items="center" class="py-16 px-24 border-none bg-secondary" @click="floating_sidebar.toggle">
          <span class="content medium w-100 text-left">close sidebar</span>
        </button>
      </min-column>
    </min-section>
  </min-sidebar>
</template>
