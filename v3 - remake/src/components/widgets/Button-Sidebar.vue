<script lang="ts" setup>
const props = defineProps({
  icon: String,
  label: String,
  active: Boolean,
});
</script>

<template>
  <button
    content="center"
    items="center"
    class="w-100 p-12 gap-6 radius-6 overflow-hidden d-flex flex-row border-grey-50"
    :class="[props.active ? 'bg-accent border-none' : 'border-w-1']"
  >
    <i class="font-regular" :class="[props.icon, props.active && 'color-light']"></i>
    <p class="w-100 d-block font-xs medium capitalize text-left" :class="[props.active && 'color-light']">
      {{ props.label }}
    </p>
  </button>
</template>
