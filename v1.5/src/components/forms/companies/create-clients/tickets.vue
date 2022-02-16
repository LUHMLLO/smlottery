<template>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Ticket Header</label>
    <button content="center" items="center" class="radius-6 border-w-2 border-secondary size-256 gap-6 d-flex">
      <i class="uil uil-image-upload font-lg" />
      <label>Upload Logo</label>
    </button>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Ticket Phone</label>
    <min-row class="gap-24">
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> Business </label>
      </min-checkbox>
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> Seller </label>
      </min-checkbox>
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> None </label>
      </min-checkbox>
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Register by default</label>
    <min-row class="gap-24">
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> Printer </label>
      </min-checkbox>
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> Whatsapp </label>
      </min-checkbox>
      <min-checkbox class="gap-6">
        <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
        <label> None </label>
      </min-checkbox>
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Invalidation</label>
    <input type="number" value="3" class="radius-6 border-w-2 border-secondary width-128" />
    <small class="color-secondary">0 = valid until lottery is open</small>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Page Footer</label>
    <min-column class="gap-8">
      <min-row items="center" class="whitespace-nowrap gap-8">
        <label class="font-xs">Message #1</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-row>
      <min-row items="center" class="whitespace-nowrap gap-8">
        <label class="font-xs">Message #2</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-row>
      <min-row items="center" class="whitespace-nowrap gap-8">
        <label class="font-xs">Message #3</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-row>
    </min-column>

    <min-row items="center" class="gap-8">
      <button content="center" items="center" class="radius-6 border-w-2 border-secondary p-0 size-24 gap-6 d-flex">
        <i class="uil uil-plus" />
      </button>
      <small class="font-xs">Add another message</small>
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Ticket style</label>
    <min-row class="gap-24">
      <min-column items="center" class="gap-8">
        <div class="radius-6 border border-w-2 border-secondary color-secondary height-256 w-100 gap-6 d-flex"></div>
        <min-checkbox class="gap-6">
          <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
          <label> style 1 </label>
        </min-checkbox>
      </min-column>
      <min-column items="center" class="gap-8">
        <div class="radius-6 border border-w-2 border-secondary color-secondary height-256 w-100 gap-6 d-flex"></div>
        <min-checkbox class="gap-6">
          <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
          <label> style 2 </label>
        </min-checkbox>
      </min-column>
      <min-column items="center" class="gap-8">
        <div class="radius-6 border border-w-2 border-secondary color-secondary height-256 w-100 gap-6 d-flex"></div>
        <min-checkbox class="gap-6">
          <input type="checkbox" class="radius-6 border-w-2 border-secondary" />
          <label> style 3 </label>
        </min-checkbox>
      </min-column>
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->
</template>
