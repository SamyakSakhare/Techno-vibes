import { useEffect } from 'react';

function useLazyLoad() {
  useEffect(() => {
    const lazyElements = document.querySelectorAll('img.lazy, video.lazy');

    const lazyLoad = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;
          if (lazyElement.tagName === 'IMG') {
            lazyElement.src = lazyElement.dataset.src;
          } else if (lazyElement.tagName === 'VIDEO') {
            const source = lazyElement.querySelector('source');
            source.src = source.dataset.src;
            lazyElement.load();
          }
          lazyElement.classList.remove('lazy');
          lazyLoad.unobserve(lazyElement);
        }
      });
    });

    lazyElements.forEach(element => {
      lazyLoad.observe(element);
    });

    
    return () => {
      lazyElements.forEach(element => {
        lazyLoad.unobserve(element);
      });
    };
  }, []);
}

export default useLazyLoad;
