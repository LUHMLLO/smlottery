<script setup lang="ts">
const loterrieslist = [
  "La primera",
  "Real",
  "Nacional 3PM",
  "Loteka",
  "New York Dia",
  "New York Noche",
  "Florida Dia",
  "Quiniela Pale",
  "Nacional",
];
</script>

<template>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-24 overflow-visible">
    <label class="label">Active Lotteries</label>

    <min-column class="gap-24">
      <!------------------------------------------------------------------------------------------->
      <min-row
        items="center"
        class="whitespace-nowrap gap-8"
        :style="'z-index: -' + index"
        v-for="(lot, index) in loterrieslist"
      >
        <label>{{ lot }}</label>

        <min-dropdown class="gap-6">
          <button dropdown class="radius-6 border-w-2 border-secondary">
            {{ lot }}
            <i class="uil uil-angle-down" />
          </button>
          <min-wrapper>
            <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
              <button option>{{ lot }}</button>
            </min-column>
          </min-wrapper>
        </min-dropdown>
      </min-row>

      <!------------------------------------------------------------------------------------------->
    </min-column>
  </min-input>
  <!------------------------------------------------------------------------------------------->
</template>
