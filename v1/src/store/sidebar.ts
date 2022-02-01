import { defineStore } from "pinia";

export const useSidebarStore = defineStore("modal", {
  state: () => ({ state: false }),
  actions: {
    toggle() {
      this.state = !this.state;
    },
  },
});
