<template>
  <label class="label">Security Questions</label>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible" :style="'z-index: -' + index" v-for="(q, index) in 6">
    
      <min-dropdown class="gap-6 z-index-3">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          Choose a security question from the list
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option v-for="qs in 8">Question number {{qs}}</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    <min-row items="center" class="whitespace-nowrap gap-8 z-index-1">
      <label class="font-xs">Answer</label>
      <input type="text" class="radius-6 border-w-2 border-secondary" />
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->

  <min-row items="center" class="gap-8">
    <button content="center" items="center" class="radius-6 border-w-2 border-secondary p-0 size-24 gap-6 d-flex">
      <i class="uil uil-plus" />
    </button>
    <small class="font-xs">Add another question</small>
  </min-row>
  <!------------------------------------------------------------------------------------------->
</template>
