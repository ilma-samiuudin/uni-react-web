import '@testing-library/jest-dom';

if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (media) => ({
    matches: false,
    media,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof window.IntersectionObserver !== 'function') {
  window.IntersectionObserver = class IntersectionObserverMock {
    constructor(callback) {
      this.callback = callback;
    }

    observe(target) {
      this.callback([{ isIntersecting: true, intersectionRatio: 1, target }]);
    }

    unobserve() {}

    disconnect() {}

    takeRecords() {
      return [];
    }
  };
}
