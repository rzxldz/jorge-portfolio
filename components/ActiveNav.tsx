"use client";

import { useEffect } from "react";

export default function ActiveNav() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".nav-links a"
      )
    );

    const sections = [
      "sobre-mi",
      "proyectos",
      "habilidades",
      "trayectoria",
      "contacto",
    ]
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          links.forEach((link) => {
            const href = link.getAttribute("href");

            link.classList.toggle(
              "active",
              href === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}