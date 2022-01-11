<script setup lang="ts">

import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

</script>

<template>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
</template>
