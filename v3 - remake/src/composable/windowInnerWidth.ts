const ws = ref(window.innerWidth);

export default () => {
  onMounted(() => {
    window.addEventListener("resize", () => {
      ws.value = window.innerWidth;
    });
  });

  onUnmounted(() => {
    window.removeEventListener("resize", () => {
      ws.value = window.innerWidth;
    });
  });
  return {
    useWindowSize: ws,
  };
};
