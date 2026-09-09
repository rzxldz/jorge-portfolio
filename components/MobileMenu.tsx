"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu-button ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu-panel ${open ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          <a href="#sobre-mi" onClick={closeMenu}>
            <span>01</span>
            Sobre mí
          </a>

          <a href="#proyectos" onClick={closeMenu}>
            <span>02</span>
            Proyectos
          </a>

          <a href="#habilidades" onClick={closeMenu}>
            <span>03</span>
            Habilidades
          </a>

          <a href="#trayectoria" onClick={closeMenu}>
            <span>04</span>
            Trayectoria
          </a>

          <a href="#contacto" onClick={closeMenu}>
            <span>05</span>
            Contacto
          </a>
        </nav>

        <a
          href="/cv.pdf"
          className="mobile-cv"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Ver CV ↗
        </a>
      </div>
    </div>
  );
}