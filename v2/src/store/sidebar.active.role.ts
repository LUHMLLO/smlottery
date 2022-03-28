import { defineStore } from "pinia";

export const use_sidebar_active_role_store = defineStore("sidebar_active_role", {
  state: () => ({
    role: new String(),
  }),
  actions: {
    set(payload: { role: string }) {
      this.role = payload.role;
      localStorage.setItem("activeSidebarRole", JSON.stringify(this.role));
    },
    isActive() {
      if (localStorage.getItem("activeSidebarRole")) {
        this.role = JSON.parse(localStorage.getItem("activeSidebarRole") || "");
      }
    },
  },
});
