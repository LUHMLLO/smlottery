<script lang="ts" setup>
const props = defineProps({
  icon: String,
  active: Boolean,
});
</script>

<template>
  <button
    content="center"
    items="center"
    class="size-44 radius-5 border-none p-0 overflow-hidden"
    :class="[props.active && 'bg-accent']"
  >
    <i class="font-lg" :class="[props.icon, props.active && 'color-primary']"></i>
  </button>
</template>
