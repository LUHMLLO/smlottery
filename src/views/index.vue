<route>
{
  name: "homepage",
  meta: {requiresAuth: false}
}
</route>

<script setup lang="ts">

useHead({
  title: 'Index Page',
})

</script>

<template>
  <Hello />
</template>
