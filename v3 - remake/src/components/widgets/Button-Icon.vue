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
    class="size-32 radius-6 border-none p-0 overflow-hidden"
    :class="[props.active && 'bg-accent']"
  >
    <i class="font-regular" :class="[props.icon, props.active && 'color-light']"></i>
  </button>
</template>
