<script setup lang="ts">
//pinia
import { useSidebarStore } from "@/store/sidebar";
const sidebar = useSidebarStore();

//router
const route = useRoute();

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
  <min-sidebar class="bg-black-400 gap-32 overflow-visible" scroll-y v-if="sidebar.state">
    <min-thumbnail class="size-48 bg-none">
      <img src="@/assets/icons8-clover-96.png" alt="logo" />
    </min-thumbnail>

    <min-section class="gap-8" v-for="role in sidebarSections">
      <small class="font-xxs uppercase color-black-50">{{ role.level }}</small>

      <min-column class="gap-3" v-for="section in role.sections">
        <label class="label color-white-700 uppercase">{{ section.title }}</label>
        <min-column>
          <router-link
            :to="r.path"
            type="button"
            class="link w-100 p-8"
            :class="[r.path == route.path ? 'bg-black-400' : 'border-none']"
            v-for="r in section.routes"
            >{{ r.name }}</router-link
          >
        </min-column>
      </min-column>
    </min-section>

    <min-fab class="top right size-24 mt-24 offset-r-5 bg-black-400" @click="sidebar.toggle">
      <i class="uil uil-multiply font-xxs color-light" />
    </min-fab>
  </min-sidebar>
</template>
