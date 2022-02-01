<template>
  <min-header class="bg-primary p-0 whitespace-nowrap">
    <min-row>
      <router-link to="/" type="button" items="center" class="p-24 height-72 border-none d-inline-flex d-row gap-24">
        <min-logo class="size-24">
          <img src="@/assets/logo-light.svg" alt="logo" />
        </min-logo>
        <h6 class="heading uppercase">smlottery</h6>
      </router-link>

      <button class="p-24 size-72 border-none">
        <i class="icon uil-search font-lg"></i>
      </button>

      <min-row items="center" content="end">
        <min-row items="center" class="p-16 gap-12 w-auto">
          <min-avatar class="size-32 border border-w-2">
            <img
              src="https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg"
              alt="avatar"
            />
          </min-avatar>
          <min-column>
            <p class="content">username here</p>
            <p class="content color-accent">zone - country</p>
          </min-column>
        </min-row>

        <button class="p-24 size-72 border-none">
          <i class="icon uil-moonset font-lg"></i>
        </button>

        <button class="p-24 size-72 border-none">
          <i class="icon uil-english-to-chinese font-lg"></i>
        </button>
      </min-row>
    </min-row>

    <hr class="bg-ternary opacity-50 height-2 w-100" />
  </min-header>
</template>
