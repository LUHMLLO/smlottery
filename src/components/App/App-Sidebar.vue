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
    level: "Opciones Super Admin",
    sections: [
      {
        title: "Empresas",
        routes: ["Create clients", "Sorteo", "Monitoreo", "Facturacion"],
      },
      {
        title: "Aplicacion",
        routes: ["App Movil", "App Pc", "App Jugadores"],
      },
      {
        title: "Registro (LOG)",
        routes: ["Log Panel", "Log Socket", "Status del Servidor"],
      },
    ],
  },

  {
    level: "Opciones Administrador Empresa",
    sections: [
      {
        title: "Configuracion",
        routes: ["item", "item", "item"],
      },
      {
        title: "Administrar",
        routes: ["item", "item", "item"],
      },
      {
        title: "Puntos de venta",
        routes: ["item", "item", "item"],
      },
      {
        title: "Recargas",
        routes: ["item", "item", "item"],
      },
      {
        title: "Cuentas",
        routes: ["item", "item", "item"],
      },
      {
        title: "Reportes",
        routes: ["item", "item", "item"],
      },
      {
        title: "Administradores",
        routes: ["item", "item", "item"],
      },
    ],
  },
];
</script>

<template>
  <min-sidebar
    class="gap-32 p-absolute top left bottom bg-secondary h-100 w-auto depth-6-black-500"
    scroll-y
    ref="target_sidebar"
    v-if="sidebar.state"
  >
    <min-row content="end">
      <i class="uil uil-multiply icon color-primary" @click="sidebar.toggle"></i>
    </min-row>

    <h5 class="heading color-primary">SMLottery</h5>

    <min-column class="gap-32">
      <min-column class="gap-16" v-for="role in sidebarSections">
        <header>
          <h6 class="color-primary">{{ role.level }}</h6>
          <hr class="w-100 height-1" />
        </header>

        <min-section class="pl-8" v-for="section in role.sections">
          <label class="label color-primary">{{ section.title }}</label>
          <min-column class="gap-8 p-8 color-accent">
            <router-link :to="route.replace(/\s+/g, '-').toLowerCase()" class="link" v-for="route in section.routes">{{ route }}</router-link>
          </min-column>
        </min-section>
      </min-column>
    </min-column>
  </min-sidebar>
</template>
