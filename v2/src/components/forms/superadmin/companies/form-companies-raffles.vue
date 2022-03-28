<script setup lang="ts">
const loterrieslist = ["La primera", "Real", "Ganamas", "Loteka", "Florida Dia", "Florida Noche", "Quiniela Pale", "Nacional"];
const picklist = ["New York Dia", "New York Noche"];
</script>

<template>
  <!------------------------------------------------------------------------------------------->

  <min-input class="gap-6">
    <label class="label">Date</label>
    <input
      type="date"
      value="2022-02-16"
      min="2018-01-01"
      max="2022-02-16"
      class="radius-6 border-w-2 border-secondary width-164"
    />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Lotteries</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          All
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>Florida - something</button>
            <button option>creative name here</button>
            <button option>banca piolin</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-wrapper>
  </min-input>

  <!------------------------------------------------------------------------------------------->
  <table borderless class="w-auto">
    <tr>
      <th class="width-128"></th>
      <th class="width-128">1st</th>
      <th class="width-128">2nd</th>
      <th class="width-128">3rd</th>
    </tr>
    <tr v-for="lot in loterrieslist">
      <td>{{ lot }}</td>
      <td><input type="text" class="radius-6 border-w-2 border-secondary w-88" /></td>
      <td><input type="text" class="radius-6 border-w-2 border-secondary w-88" /></td>
      <td><input type="text" class="radius-6 border-w-2 border-secondary w-88" /></td>
    </tr>
  </table>
  <!------------------------------------------------------------------------------------------->
  <table borderless class="w-auto">
    <tr>
      <th class="width-128"></th>
      <th class="width-128">pick 3</th>
      <th class="width-128">pick 4</th>
    </tr>
    <tr v-for="lot in picklist">
      <td>{{ lot }}</td>
      <td><input type="text" class="radius-6 border-w-2 border-secondary w-88" /></td>
      <td><input type="text" class="radius-6 border-w-2 border-secondary w-88" /></td>
    </tr>
  </table>
  <!------------------------------------------------------------------------------------------->
</template>
