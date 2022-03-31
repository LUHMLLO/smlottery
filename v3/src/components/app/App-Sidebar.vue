<script lang="ts" setup>
import { useSidebarStore } from "@/store/sidebar";
import useWindowSize from "@/composable/windowInnerWidth";

const { useWindowSize: ws } = useWindowSize();
</script>

<template>
  <min-sidebar
    class="flex-row p-0 w-auto radius-tr-6 radius-br-6 depth-3-black-500 overflow-visible"
    noshrink
    :class="[ws <= 768 && 'p-absolute h-100 top left', useSidebarStore().state && 'z-index-16']"
  >
    <min-column class="gap-48 px-12 py-24 w-auto h-100" noshrink scroll-y>
      <min-section content="center" items="center" class="gap-12">
        <min-logo class="bg-none size-32">
          <img src="@/assets/logo.png" alt="logo" class="h-100 w-100" fill />
        </min-logo>
      </min-section>
      <min-section content="center" items="center" class="gap-12">
        <Button-Icon icon="uil-estate" :active="true" />
        <Button-Icon icon="uil-bolt-alt" @click="useSidebarStore().on()" />
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
        <Avatar-Icon class="size-32" />
      </min-section>
    </min-column>
    <hr class="h-100 bg-quinary d-block width-1" noshrink v-if="useSidebarStore().state" />
    <min-column class="gap-48 p-24 width-172 h-100" noshrink scroll-y v-if="useSidebarStore().state">
      <min-section class="gap-12">
        <header content="center" items="center" class="height-48">
          <h5 class="font-md bold color-tertiary uppercase">Super user</h5>
        </header>
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-tertiary">Companies</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="create clients" :active="true" />
        <Button-Sidebar icon="uil-bolt-alt" label="raffles" />
        <Button-Sidebar icon="uil-bolt-alt" label="monitoring" />
        <Button-Sidebar icon="uil-bolt-alt" label="billing" />
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-tertiary">Apps</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="mobile" />
        <Button-Sidebar icon="uil-bolt-alt" label="desktop" />
        <Button-Sidebar icon="uil-bolt-alt" label="players" />
      </min-section>
      <min-section class="gap-12">
        <header>
          <h6 class="font-sm bold color-tertiary">Logs</h6>
        </header>
        <Button-Sidebar icon="uil-bolt-alt" label="Log panel" />
        <Button-Sidebar icon="uil-bolt-alt" label="Log socket" />
        <Button-Sidebar icon="uil-bolt-alt" label="server status" />
      </min-section>
    </min-column>

    <min-fab
      class="bg-secondary size-32 top right mt-12 offset-r-12 depth-3-black-500 border-quinary overflow-hidden"
      @click="useSidebarStore().off()"
      v-if="useSidebarStore().state"
    >
      <i class="uil-angle-left color-tertiary font-regular"></i>
    </min-fab>
  </min-sidebar>
</template>
