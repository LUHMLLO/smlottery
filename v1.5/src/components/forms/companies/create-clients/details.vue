<template>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Business Name</label>
    <input type="text" class="radius-6 border-w-2 border-secondary" />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Slogan</label>
    <input type="text" class="radius-6 border-w-2 border-secondary" />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Phone Number</label>
    <input type="text" class="radius-6 border-w-2 border-secondary" />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Address</label>
    <input type="text" class="radius-6 border-w-2 border-secondary" />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-4">
    <label class="label">Currency</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          DO - Dominican Peso
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>DO - Dominican Peso</button>
            <button option>USD - American Dollar</button>
            <button option>CAD - Canadian Dollar</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-wrapper>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-3">
    <label class="label">Panel Language</label>
    <min-row class="gap-24">
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          English
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>English</button>
            <button option>Spanish</button>
            <button option>French</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>

      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          no variant
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>US variant</button>
            <button option>UK variant</button>
            <button option>AU variant</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-row>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Time Zone</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          America central -4
          <i class="uil uil-angle-down" />
        </button>
        <min-wrapper>
          <min-column dropdown class="radius-6 border-w-2 border-secondary bg-primary">
            <button option>America central -4</button>
            <button option>America central -4</button>
            <button option>America central -4</button>
          </min-column>
        </min-wrapper>
      </min-dropdown>
    </min-wrapper>
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6">
    <label class="label">Code</label>
    <input type="text" class="radius-6 border-w-2 border-secondary" />
  </min-input>
  <!------------------------------------------------------------------------------------------->
  <min-row class="gap-24">
    <min-column class="gap-24">
      <min-input class="gap-6">
        <label class="label">Owner Name</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
      <min-input class="gap-6">
        <label class="label">Phone Number</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
      <min-input class="gap-6">
        <label class="label">Email Address</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
    </min-column>
    <!------------------------------------------------------------------------------------------->
    <min-column class="gap-24">
      <min-input class="gap-6">
        <label class="label">CEO Name</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
      <min-input class="gap-6">
        <label class="label">Phone Number</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
      <min-input class="gap-6">
        <label class="label">Email Address</label>
        <input type="text" class="radius-6 border-w-2 border-secondary" />
      </min-input>
    </min-column>
  </min-row>
  <!------------------------------------------------------------------------------------------->
  <min-input class="gap-6 overflow-visible z-index-2">
    <label class="label">Status</label>
    <min-wrapper>
      <min-dropdown class="gap-6">
        <button dropdown class="radius-6 border-w-2 border-secondary">
          Active
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
  <min-input class="gap-6">
    <label class="label">Phone Services</label>
    <min-toggle class="radius-128 border-w-2 border-secondary bg-primary">
      <input type="checkbox" />
      <label class="border-ternary"/>
    </min-toggle>
  </min-input>
  <!------------------------------------------------------------------------------------------->
</template>
