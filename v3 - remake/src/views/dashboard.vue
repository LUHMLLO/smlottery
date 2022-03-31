<route lang="json">
{
  "name": "dashboard"
}
</route>

<script lang="ts" setup></script>

<template>
  <!-------------------------------------------------------------------------------------------------------------->
  <min-row content="center" items="center">
    <Welcome-Tile />
    <min-row content="end" items="center" class="gap-12">
      <Button-Cta>view reports</Button-Cta>
      <Button-Cta class="bg-accent border-accent color-light depth-3-mint-500">Manage Shop</Button-Cta>
    </min-row>
  </min-row>
  <!-------------------------------------------------------------------------------------------------------------->
  <min-column class="gap-24">
    <min-grid class="gap-24 grid-1 md:grid-2 lg:grid-4">
      <Card-Sales />
      <Card-Sales />
      <Card-Sales />
      <Card-Sales />
    </min-grid>
    <!-------------------------------------------------------------------------------------------------------------->
    <min-grid class="gap-24 grid-1 lg:grid-2">
      <Card-Revenue />
      <Card-Revenue />
      <Card-SalesRevenue />
      <Card-SalesRevenue />
      <Card-Stats />
      <Card-Stats />
    </min-grid>
  </min-column>
  <!-------------------------------------------------------------------------------------------------------------->
</template>
