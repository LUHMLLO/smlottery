<template>
  <min-column class="p-24 gap-24 bg-primary">
    <!--------------------------------------------------------------------------------------------->
    <min-row content="center" items="center">
      <min-column>
        <h4 class="black">Welcome back, user name</h4>
        <p class="content medium">We're very happy to see you again on your dashboard.</p>
      </min-column>
      <min-row content="end" items="center" class="gap-24">
        <button items="center" class="py-16 px-24 border-none bg-secondary">
          <span class="content medium w-100 text-left">View reports</span>
        </button>
        <button items="center" class="py-16 px-24 border-none bg-accent">
          <span class="content medium w-100 text-left">Manage shop</span>
        </button>
      </min-row>
    </min-row>
    <!--------------------------------------------------------------------------------------------->

    <min-grid class="grid-4 gap-24">
      <min-column class="bg-secondary p-24" v-for="col in 4">
        <min-row items="center">
          <p class="content w-100">total sales</p>
          <i items="center" class="uil uil-analysis bg-accent radius-24 size-24"></i>
        </min-row>
        <h5 class="bold">641.5k</h5>
      </min-column>
    </min-grid>
    <!--------------------------------------------------------------------------------------------->
    <min-grid class="grid-2 gap-24">
      <min-column class="bg-secondary p-24 gap-24" v-for="col in 2">
        <p class="content">revenue</p>

        <min-grid class="grid-2 gap-24">
          <min-column v-for="col in 2">
            <p class="content">{{ ["this month", "last month"][col - 1] }}</p>
            <small class="bold">$75,648.43</small>
          </min-column>
        </min-grid>

        <ChartsLine/>

      </min-column>
    </min-grid>
    <!--------------------------------------------------------------------------------------------->
    <min-grid class="grid-2 gap-24">
      <min-column class="bg-secondary p-24 gap-24" v-for="col in 2">
        <header>
          <p class="content">sales revenue</p>
          <small class="bold">$8,641.26</small>
        </header>
        <min-row>
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc
            quidem modo paria.
          </p>
        </min-row>
      </min-column>
    </min-grid>
    <!--------------------------------------------------------------------------------------------->
    <min-grid class="grid-2 gap-24">
      <min-column class="bg-secondary p-24 gap-24" v-for="col in 2">
        <header>
          <p class="content">sales revenue</p>
          <small class="bold">$8,641.26</small>
        </header>
        <min-row>
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc
            quidem modo paria.
          </p>
        </min-row>
      </min-column>
    </min-grid>
    <!--------------------------------------------------------------------------------------------->
  </min-column>
</template>
