"use client";
import { useEffect } from "react";

const useScrollObserver = (selector: string, animationClass: string) => {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(selector);

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, animationClass]);
};

export default useScrollObserver;
