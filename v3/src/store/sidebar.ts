import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    state: false,
  }),
  actions: {
    on() {
      this.state = true;
    },
    off() {
      this.state = false;
    },
    toggle() {
      this.state = !this.state;
    },
  },
});
