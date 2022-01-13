<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useThemeStore } from '@/store/theme'
const theme = useThemeStore()

onBeforeMount(() => {
    theme.check()
})
</script>

<template>
    <h1>{{ theme.theme }}</h1>
    <button @click="theme.toggle">toggle theme</button>
    <button @click="theme.auto">auto theme</button>
</template>
