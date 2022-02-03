<template>
  <min-column class="p-24 bg-primary">
    
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


    <min-grid class="grid-4">

      <min-column class="bg-accent">
        <ChartsLine/>
      </min-column>

    </min-grid>


  </min-column>
</template>
