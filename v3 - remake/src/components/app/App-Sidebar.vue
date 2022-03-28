<script lang="ts" setup></script>

<template>
  <min-sidebar class="flex-row p-0 w-auto radius-tr-5 radius-br-5 depth-1-black-500" noshrink>
    <min-column class="gap-48 px-12 py-24 w-auto h-100" noshrink scroll-y>
      <min-section content="center" items="center" class="gap-12">
        <min-logo class="bg-none size-44">
          <img src="favicon.png" alt="logo" class="h-100 w-100" fill />
        </min-logo>
      </min-section>
      <min-section content="center" items="center" class="gap-12">
        <Button-Icon icon="uil-estate" />
        <Button-Icon icon="uil-bolt-alt" active="true" />
        <Button-Icon icon="uil-users-alt" />
      </min-section>
      <min-section content="center" items="center" class="gap-12">
        <Button-Icon icon="uil-bell" />
        <Button-Icon icon="uil-comments-alt" />
        <Button-Icon icon="uil-search" />
      </min-section>
      <min-section content="center" items="center" class="gap-12">
        <Button-Icon icon="uil-english-to-chinese" />
        <Button-Icon icon="uil-setting" />
        <min-avatar class="size-44">
          <img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139" alt="avatar" />
        </min-avatar>
      </min-section>
    </min-column>
    <hr class="h-100 bg-grey-50 d-block width-2" noshrink />
    <min-column class="gap-48 p-24 width-172  h-100" noshrink scroll-y>
      <min-section class="gap-12">
        <header content="center" items="center" class="height-44">
          <h5 class="font-md bold color-grey-900 uppercase">Super user</h5>
        </header>
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-grey-900">Companies</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="create clients" active="true" />
        <Button-Sidebar icon="uil-bolt-alt" label="raffles" />
        <Button-Sidebar icon="uil-bolt-alt" label="monitoring" />
        <Button-Sidebar icon="uil-bolt-alt" label="billing" />
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-grey-900">Apps</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="mobile" />
        <Button-Sidebar icon="uil-bolt-alt" label="desktop" />
        <Button-Sidebar icon="uil-bolt-alt" label="players" />
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-grey-900">Logs</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="Log panel" />
        <Button-Sidebar icon="uil-bolt-alt" label="Log socket" />
        <Button-Sidebar icon="uil-bolt-alt" label="server status" />
      </min-section>
    </min-column>
  </min-sidebar>
</template>
