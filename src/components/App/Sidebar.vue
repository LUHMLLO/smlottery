<script setup lang="ts">
//pinia
import { useSidebarStore } from "@/store/sidebar";
const sidebar = useSidebarStore();

//vueuse
const target_sidebar = ref(null);
onClickOutside(target_sidebar, () => sidebar.toggle());

//vanilla object with arrays
const sidebarSections = [
  {
    level: "Super Admin",
    sections: [
      {
        title: "Companies",
        routes: [
          { name: "Create clients", path: "/superadmin/companies/create-clients" },
          { name: "Raffles", path: "/superadmin/companies/raffles" },
          { name: "Monitoring", path: "/superadmin/companies/monitoring" },
          { name: "Billing", path: "/superadmin/companies/billing" },
        ],
      },
      {
        title: "Apps",
        routes: [
          { name: "App Movil", path: "/superadmin/apps/movil" },
          { name: "App Pc", path: "/superadmin/apps/pc" },
          { name: "App Players", path: "/superadmin/apps/players" },
        ],
      },
      {
        title: "Logs",
        routes: [
          { name: "Log Panel", path: "/superadmin/logs/panel" },
          { name: "Log Socket", path: "/superadmin/logs/socket" },
          { name: "Server Status", path: "/superadmin/logs/status" },
        ],
      },
    ],
  },

  {
    level: "Lottery Admin",
    sections: [
      {
        title: "Configuracion",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Administrar",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Puntos de venta",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Recargas",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Cuentas",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Reportes",
        routes: [{ name: "no item found", path: "/#" }],
      },
      {
        title: "Administradores",
        routes: [{ name: "no item found", path: "/#" }],
      },
    ],
  },
];
</script>

<template>
  <min-sidebar
    class="gap-32 p-absolute top left bottom bg-dark h-100 w-auto depth-6-black-500"
    scroll-y
    ref="target_sidebar"
    v-if="sidebar.state"
  >
    <min-row content="end">
      <i class="uil uil-multiply icon color-light" @click="sidebar.toggle"></i>
    </min-row>

    <h5 class="heading color-light">SMLottery</h5>

    <min-column class="gap-32">
      <min-column class="gap-16" v-for="role in sidebarSections">
        <header>
          <h6 class="color-primary">{{ role.level }}</h6>
          <hr class="w-100 height-1" />
        </header>

        <min-section class="pl-8" v-for="section in role.sections">
          <label class="label color-light">{{ section.title }}</label>
          <min-column class="gap-8 p-8 color-accent">
            <router-link :to="route.path" class="link" v-for="route in section.routes">{{ route.name }}</router-link>
          </min-column>
        </min-section>
      </min-column>
    </min-column>
  </min-sidebar>
</template>
