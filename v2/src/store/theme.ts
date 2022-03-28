import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({ palette: "light" }),
  actions: {
    check() {
      if (localStorage.getItem("theme")) {
        this.palette = JSON.parse(localStorage.getItem("theme") || "undefined");
        this.set();
      }
    },

    set() {
      document.querySelector("html")?.setAttribute("forced-color-scheme", this.palette);
      localStorage.setItem("theme", JSON.stringify(this.palette));
    },

    toggle() {
      switch (this.palette) {
        case "dark":
          this.palette = "light";
          document.querySelector("html")?.setAttribute("forced-color-scheme", "light");
          break;
        case "light":
          this.palette = "dark";
          document.querySelector("html")?.setAttribute("forced-color-scheme", "dark");
          break;
      }

      localStorage.setItem("theme", JSON.stringify(this.palette));
    },

    auto() {
      document.querySelector("html")?.removeAttribute("forced-color-scheme");
      localStorage.removeItem("theme");
    },
  },
});
