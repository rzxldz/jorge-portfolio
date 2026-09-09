"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const selectors = [
      ".section-heading",
      ".about-grid",
      ".status-grid",
      ".project",
      ".skills-intro",
      ".skill-card",
      ".timeline-item",
      ".current-top",
      ".goals-grid",
      ".interests-grid article",
      ".contact-grid",
    ];

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        selectors.join(",")
      )
    );

    const projects = Array.from(
      document.querySelectorAll<HTMLElement>(".project")
    );

    elements.forEach((element) => {
      element.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          const isProject =
            element.classList.contains("project");

          let startX = 0;
          let startY = 65;

          if (isProject) {
            const index = projects.indexOf(element);

            startX = index % 2 === 0 ? -100 : 100;
            startY = 0;
          }

          element.animate(
            [
              {
                opacity: 0,
                transform: `translate(${startX}px, ${startY}px)`,
              },
              {
                opacity: 1,
                transform: "translate(0, 0)",
              },
            ],
            {
              duration: isProject ? 1000 : 800,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "forwards",
            }
          );

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}