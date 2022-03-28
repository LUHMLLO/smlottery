export const Intersect = (target: any, func: Function) => {
  if (target) {
    console.log(target);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          func();
        }
      });
    }, options);

    observer.observe(target);
  }
};
