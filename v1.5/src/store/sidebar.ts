import { defineStore } from "pinia";

export const useSidebarStore = defineStore("modal", {
  state: () => ({ state: true }),
  actions: {
    toggle() {
      this.state = !this.state;
    },
  },
});
