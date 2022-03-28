<route lang="json">
{
  "name": "Create Client",
  "meta": {
    "icon": "uil-edit"
  }
}
</route>

<script setup lang="ts">
//scroll event target
//const target_scroll = ref<null | HTMLDivElement>(null);

//tabs interface
interface tabsInterface {
  [key: string]: boolean;
}

//tabs object using Reactive from vue 3 composition api
const tabs = reactive<tabsInterface>({
  details: true,
  tickets: false,
  raffles: false,
  licenses: false,
  security: false,
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
  <min-tabs class="bg-primary">
    <min-tabs-header>
      <button tab @click="toggleTabs('details')" :class="[tabs.details && 'bg-secondary']">
        <label :class="[tabs.details && 'color-accent']"> Business Details </label>
        <hr class="height-2" :class="[tabs.details ? 'bg-accent' : 'bg-secondary']" />
      </button>
      <button tab @click="toggleTabs('tickets')" :class="[tabs.tickets && 'bg-secondary']">
        <label :class="[tabs.tickets && 'color-accent']">Tickets Config</label>
        <hr class="height-2" :class="[tabs.tickets ? 'bg-accent' : 'bg-secondary']" />
      </button>
      <button tab @click="toggleTabs('raffles')" :class="[tabs.raffles && 'bg-secondary']">
        <label :class="[tabs.raffles && 'color-accent']">Automatic Raffles</label>
        <hr class="height-2" :class="[tabs.raffles ? 'bg-accent' : 'bg-secondary']" />
      </button>
      <button tab @click="toggleTabs('licenses')" :class="[tabs.licenses && 'bg-secondary']">
        <label :class="[tabs.licenses && 'color-accent']">Plans & Licenses</label>
        <hr class="height-2" :class="[tabs.licenses ? 'bg-accent' : 'bg-secondary']" />
      </button>
      <button tab @click="toggleTabs('security')" :class="[tabs.security && 'bg-secondary']">
        <label :class="[tabs.security && 'color-accent']">Security</label>
        <hr class="height-2" :class="[tabs.security ? 'bg-accent' : 'bg-secondary']" />
      </button>
    </min-tabs-header>

    <min-tabs-content>
      <FormLayout>
        <Form-Companies-Createclients-Details v-if="tabs.details" />
        <Form-Companies-Createclients-Tickets v-if="tabs.tickets" />
        <Form-Companies-Createclients-Raffles v-if="tabs.raffles" />
        <Form-Companies-Createclients-Licenses v-if="tabs.licenses" />
        <Form-Companies-Createclients-Security v-if="tabs.security" />
      </FormLayout>
    </min-tabs-content>
  </min-tabs>
</template>
