<script setup lang="ts">
//vueuse
useHead({
  title: "smlottery - crud",
});

//scroll event target
const target_scroll = ref(null);

const tabs = reactive({
  crearClientes: true,
  configurarTickets: false,
  sorteosAutomaticos: false,
  planesYLicencias: false,
  preguntasDeSeguridad: false,
});

function toggleOne(toggle: string): void {
  Object.entries(tabs).forEach(([key, value]) => {
    if (toggle == key) {
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
      <button @click="toggleOne('crearClientes')" class="pl-32">Datos de Empresa</button>
      <button @click="toggleOne('configurarTickets')">Configuracion Tickets</button>
      <button @click="toggleOne('sorteosAutomaticos')">Sorteos Automaticos</button>
      <button @click="toggleOne('planesYLicencias')">Planes y Licencias</button>
      <button @click="toggleOne('preguntasDeSeguridad')" class="pr-32">Preguntas de Seguridad</button>
    </min-tabs>
    <min-fab class="left bg-primary offset-l-30" @click="target_scroll.scrollLeft = -128">
      <i class="uil uil-arrow-left icon" />
    </min-fab>
    <min-fab class="right bg-primary offset-r-30" @click="target_scroll.scrollLeft = 128">
      <i class="uil uil-arrow-right icon" />
    </min-fab>
  </min-row>
  <CrearClientes v-if="tabs.crearClientes" />
  <ConfigurarTickets v-if="tabs.configurarTickets" />
  <SorteosAutomaticos v-if="tabs.sorteosAutomaticos" />
  <PlanesYLicencias v-if="tabs.planesYLicencias" />
  <PreguntasDeSeguridad v-if="tabs.preguntasDeSeguridad" />
</template>
