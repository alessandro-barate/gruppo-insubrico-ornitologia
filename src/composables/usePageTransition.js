export function usePageTransition(options = {}) {
  const defaultOptions = {
    duration: 200,
    fadeOutDuration: 400,
    fadeInDuration: 400,
    // scrollDelay: 100,
    selector: "#app",
    minOpacity: 0.07,
    ...options,
  };

  const animatePageChange = async (customOptions = {}) => {
    const opts = { ...defaultOptions, ...customOptions };
    const app = document.querySelector(opts.selector);

    if (!app) {
      console.warn(`Element ${opts.selector} not found`);
      return;
    }

    // Fade out
    app.style.transition = `opacity ${opts.fadeOutDuration}ms ease-out`;
    app.style.opacity = opts.minOpacity.toString();

    await new Promise((resolve) => setTimeout(resolve, opts.fadeOutDuration));

    // Scroll to the top
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });

    await new Promise((resolve) => setTimeout(resolve, opts.scrollDelay));

    // Fade in
    app.style.transition = `opacity ${opts.fadeInDuration}ms ease-in`;
    app.style.opacity = "1";
  };

  return { animatePageChange };
}
