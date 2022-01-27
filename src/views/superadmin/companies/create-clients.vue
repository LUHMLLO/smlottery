<script setup lang="ts">
//vueuse
useHead({
  title: "smlottery - crud",
});

//scroll event target
const target_scroll = ref<null | HTMLDivElement>(null);

//tabs interface
interface tabsInterface {
  [key: string]: boolean;
}

//tabs object using Reactive from vue 3 composition api
const tabs = reactive<tabsInterface>({
  crearClientes: true,
  configurarTickets: false,
  sorteosAutomaticos: false,
  planesYLicencias: false,
  preguntasDeSeguridad: false,
});

//toggle the tabs
function toggleTabs(adquiredKeyName: string): void {
  Object.entries(tabs).forEach(([key]) => {
    if (adquiredKeyName == key) {
      tabs[key] = true;
    } else {
      tabs[key] = false;
    }
  });
}
</script>

<template>
  <min-row content="center" items="center">
    <min-tabs ref="target_scroll" class="d-flex flex-row whitespace-nowrap" scroll-x>
      <button @click="toggleTabs('crearClientes')" class="pl-32">Datos de Empresa</button>
      <button @click="toggleTabs('configurarTickets')">Configuracion Tickets</button>
      <button @click="toggleTabs('sorteosAutomaticos')">Sorteos Automaticos</button>
      <button @click="toggleTabs('planesYLicencias')">Planes y Licencias</button>
      <button @click="toggleTabs('preguntasDeSeguridad')" class="pr-32">Preguntas de Seguridad</button>
    </min-tabs>
    <min-fab class="left bg-primary offset-l-30" @click="target_scroll!.scrollLeft = -128">
      <i class="uil uil-arrow-left icon" />
    </min-fab>
    <min-fab class="right bg-primary offset-r-30" @click="target_scroll!.scrollLeft = 128">
      <i class="uil uil-arrow-right icon" />
    </min-fab>
  </min-row>
  <Superadmin-Companies-CreateClients-Forms-Details v-if="tabs.crearClientes" />
  <Superadmin-Companies-Create-Clients-Forms-Tickets v-if="tabs.configurarTickets" />
  <Superadmin-Companies-Create-Clients-Forms-Raffles v-if="tabs.sorteosAutomaticos" />
  <Superadmin-Companies-Create-Clients-Forms-Licenses v-if="tabs.planesYLicencias" />
  <Superadmin-Companies-Create-Clients-Forms-Security v-if="tabs.preguntasDeSeguridad" />
</template>
