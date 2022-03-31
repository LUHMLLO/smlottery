import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    alert: {
      state: false,
      url: "",
    },
    toast: {
      state: false,
      title: "",
      content: "",
    },
  }),
  actions: {
    toggleAlert(payload: { url: string }) {
      this.alert.state = !this.alert.state;
      this.alert.url = payload.url;
    },
    launchToast(payload: { title: string; content: string }) {
      this.toast.state = !this.toast.state;
      this.toast.title = payload.title;
      this.toast.content = payload.content;

      let self = this;

      setTimeout(function () {
        self.toast.state = !self.toast.state;
        self.toast.title = "";
        self.toast.content = "";
      }, 2000);
    },
  },
});
