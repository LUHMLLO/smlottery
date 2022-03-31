<template>
  <min-column class="gap-24 p-24 bg-secondary radius-6 depth-3-black-500">
    <p class="capitalize font-regular medium color-tertiary">Additional Stats</p>
    <min-grid class="gap-12 grid-3">
      <min-column items="center" v-for="col in 3">
        <button
          class="radius-88 size-88 font-lg bold p-0 bg-secondary border-quintary border-w-3 color-tertiary overflow-hidden"
          noshrink
        ></button>
        <p class="text-center font-lg bold color-accent">264</p>
        <p class="text-centercapitalize font-regular medium color-quaternary">Proposals</p>
      </min-column>
    </min-grid>
  </min-column>
</template>
