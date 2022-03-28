<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <h5>{{ route.name }}</h5>
  <slot />
</template>
