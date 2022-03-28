<template>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Adquired Plan</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          M25 Monthly
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>Inactive</button>
            <button option>Active</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-wrapper>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Number of Licenses</label>
    <min-column>
      <button class="radius-6 border-w-2 border-secondary w-auto">25</button>
    </min-column>
  </min-input>
  <!------------------------------------------------------------------------------------------->
</template>
