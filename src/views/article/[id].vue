<script setup lang="ts">
defineProps({
  id: String,
})
</script>

<template>
  <h1>hello, your id is {{ id }}</h1>
</template>

<route>
{
  name: 'about-user-id',
  meta: {
    requiresAuth: true,
  },
}
</route>
