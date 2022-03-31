<script lang="ts" setup></script>

<template>
  <min-body class="bg-primary">
    <App-Sidebar class="bg-secondary" fill />
    <min-app class="p-0" fill scroll-y>
      <App-Header />
      <min-main class="p-0 overflow-visible" noshrink>
        <min-container class="gap-48 px-24 md:px-0">
          <router-view></router-view>
        </min-container>
      </min-main>
      <App-Footer />
    </min-app>
  </min-body>
</template>
