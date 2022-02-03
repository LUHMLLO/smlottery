<script setup lang="ts">
//router
const use_route = useRoute();

//vanilla object with arrays
const target_sidebar = ref<null | HTMLDivElement>(null);
const activeSidebarRole = ref("");
const setActiveSidebarRole = (role: string) => (activeSidebarRole.value = role);
onClickOutside(target_sidebar.value, () => (activeSidebarRole.value = ""));

const sidebars = [
  {
    sidebar: "main-sidebar",
    roles: [
      {
        icon: "uil-bolt-alt",
        name: "Super Admin",
        sections: [
          {
            title: "Companies",
            routes: [
              {
                icon: "uil-edit",
                name: "Create clients",
                path: "/superadmin/companies/create-clients",
              },
              {
                icon: "uil-arrow-random",
                name: "Raffles",
                path: "/superadmin/companies/raffles",
              },
              {
                icon: "uil-analysis",
                name: "Monitoring",
                path: "/superadmin/companies/monitoring",
              },
              {
                icon: "uil-bill",
                name: "Billing",
                path: "/superadmin/companies/billing",
              },
            ],
          },
          {
            title: "Apps",
            routes: [
              {
                icon: "uil-mobile-android",
                name: "App Mobile",
                path: "/superadmin/apps/mobile",
              },
              {
                icon: "uil-desktop-alt",
                name: "App Pc",
                path: "/superadmin/apps/pc",
              },
              {
                icon: "uil-users-alt",
                name: "App Players",
                path: "/superadmin/apps/players",
              },
            ],
          },
          {
            title: "Logs",
            routes: [
              {
                icon: "uil-file-graph",
                name: "Log Panel",
                path: "/superadmin/logs/panel",
              },
              {
                icon: "uil-processor",
                name: "Log Socket",
                path: "/superadmin/logs/socket",
              },
              {
                icon: "uil-server",
                name: "Server Status",
                path: "/superadmin/logs/status",
              },
            ],
          },
        ],
      },

      {
        icon: "uil-layers",
        name: "Lottery Admin",
        sections: [
          {
            title: "Configuracion",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Administrar",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Puntos de venta",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Recargas",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Cuentas",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Reportes",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
          {
            title: "Administradores",
            routes: [
              {
                icon: "uil-bolt-alt",
                name: "no item found",
                path: "/#",
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <min-sidebar ref="target_sidebar" class="p-0 bg-primary whitspace-nowrap" fill-block v-for="sidebar in sidebars">
    <min-row class="w-100 h-100">
      <min-column class="gap-32 h-100 w-auto">
        <min-section class="h-100">
          <button
            class="p-24 size-72 border-none"
            :class="[role.name == activeSidebarRole ? 'bg-accent' : '']"
            v-for="role in sidebar.roles"
            @click="setActiveSidebarRole(role.name)"
          >
            <i class="icon font-lg" :class="role.icon"></i>
          </button>
        </min-section>

        <min-section>
          <button class="p-24 size-72 border-none">
            <i class="icon uil-setting font-lg"></i>
          </button>
        </min-section>
      </min-column>

      <hr class="bg-ternary opacity-50 width-2 h-100" />

      <template v-for="role in sidebar.roles">
        <min-column class="h-100 width-200" scroll-y v-if="role.name == activeSidebarRole">
          <min-section v-for="section in role.sections">
            <header class="py-16 px-24">
              <h6 class="subheading uppercase">{{ section.title }}</h6>
            </header>
            <min-column>
              <router-link :to="route.path" v-for="route in section.routes" class="w-100">
                <button
                  items="center"
                  class="py-16 px-24 gap-16 border-none d-flex w-100"
                  :class="[route.path == use_route.path && 'bg-secondary']"
                >
                  <i class="icon" :class="route.icon"></i>
                  <span class="content w-100 text-left">{{ route.name }} </span>
                </button>
              </router-link>
            </min-column>

            <hr class="bg-ternary opacity-50 height-2 w-100" />
          </min-section>
        </min-column>
      </template>
    </min-row>
  </min-sidebar>
</template>
