import { defineStore } from "pinia";

export const use_floating_sidebar_store = defineStore("floating_sidebar", {
  state: () => ({
    state: false,
  }),
  actions: {
    toggle() {
      this.state = !this.state;
    },
  },
});
