import ThemeToggle from "@/components/ThemeToggle";

const skills = {
  Lenguajes: [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "MATLAB",
  ],

  Desarrollo: [
    "Desarrollo web",
    "Desarrollo móvil",
    "Diseño responsive",
    "Programación orientada a objetos",
    "Estructuras de datos",
  ],

  "Datos y servicios": [
    "MySQL",
    "Firebase",
    "Google Maps API",
  ],

  Herramientas: [
    "Git",
    "GitHub",
    "VS Code",
    "Visual Studio",
    "Android Studio",
    "Google Colab",
    "Linux",
  ],

  Hardware: [
    "Arduino",
    "Raspberry Pi",
  ],

  Diseño: [
    "Canva",
    "Photoshop",
    "After Effects",
  ],
};

const projects = [
  {
    number: "01",
    title: "Dial Transport",
    subtitle: "Web Development · 2026",
    description:
      "Sitio web desarrollado para una empresa de renta y transporte de vehículos, diseñado para presentar servicios, flotilla y facilitar el contacto con clientes.",
    work:
      "Diseño y desarrollo de la interfaz, estructura responsive, organización del contenido, presentación de flotilla, formularios de cotización e integración de diferentes canales de contacto.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    live: "https://endearing-dialtransport-e7537d.netlify.app/",
    github: "https://github.com/rzxldz/Dial-Transport",
    featured: true,
  },

  {
    number: "02",
    title: "Experiencia Web Interactiva",
    subtitle: "Interactive Web Experience · 2026",
    description:
      "Experiencia digital construida alrededor de música, animaciones, audio y narrativa mediante una navegación progresiva.",
    work:
      "Diseño de la experiencia, interacción entre secciones, reproducción de audio, animaciones y desarrollo de una navegación orientada a generar una experiencia más personal.",
    tech: ["HTML", "CSS", "JavaScript", "HTML5 Audio"],
    live: "https://para-rebbeca.vercel.app/",
    github: "https://github.com/rzxldz/para-rebbeca",
    featured: false,
  },

  {
    number: "03",
    title: "Portfolio Personal",
    subtitle: "Web Design & Development · 2026",
    description:
      "Portfolio creado para presentar proyectos, formación y habilidades mediante una experiencia visual moderna, clara y responsive.",
    work:
      "Arquitectura de contenido, diseño de interfaz, responsive design, modo claro y oscuro y construcción de una experiencia enfocada en reclutamiento.",
    tech: ["Next.js", "TypeScript", "CSS", "Vercel"],
    live: "https://jorge-portfolio-mu.vercel.app/",
    github: "https://github.com/rzxldz/jorge-portfolio",
    featured: false,
  },
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function ProjectPreview({
  number,
}: {
  number: string;
}) {
  if (number === "01") {
  return (
    <div className="project-preview preview-transport-real">
      <div className="real-browser-bar">
        <div className="real-browser-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="real-browser-address">
          dialtransport.mx
        </div>
      </div>

      <img
        src="/projects/dial-transport.png"
        alt="Sitio web de Dial Transport mostrando su flotilla de vehículos"
        className="dial-transport-image"
      />
    </div>
  );
}

  if (number === "02") {
  return (
    <div className="project-preview preview-interactive-real">
      <div className="real-browser-bar">
        <div className="real-browser-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="real-browser-address">
          experiencia-interactiva
        </div>
      </div>

      <img
        src="/projects/experiencia-web-interactiva.png"
        alt="Experiencia web interactiva desarrollada por Jorge Roldán"
        className="interactive-project-image"
      />
    </div>
  );
}

  return (
    <div className="project-preview preview-portfolio">
      <div className="portfolio-window">
        <div className="portfolio-sidebar">
          <strong>JR.</strong>

          <span>01</span>
          <span>02</span>
          <span>03</span>
        </div>

        <div className="portfolio-screen">
          <span className="screen-label">
            PORTFOLIO / 2026
          </span>

          <h4>
            Jorge
            <br />
            Roldán.
          </h4>

          <div className="screen-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="screen-pill">
            Software · Web · Mobile
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav
          className="navbar container"
          aria-label="Navegación principal"
        >
          <a
            className="brand"
            href="#inicio"
            aria-label="Ir al inicio"
          >
            JR<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#sobre-mi">
              Sobre mí
            </a>

            <a href="#proyectos">
              Proyectos
            </a>

            <a href="#habilidades">
              Habilidades
            </a>

            <a href="#trayectoria">
              Trayectoria
            </a>

            <a href="#contacto">
              Contacto
            </a>
          </div>

          <div className="nav-actions">
            <ThemeToggle />

            <a
              className="nav-cv"
              href="/cv.pdf"
            >
              Ver CV
              <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="hero"
      >
        <div className="hero-noise" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />

              Disponible para oportunidades
            </div>

            <p className="eyebrow">
              PORTFOLIO · 2026
            </p>

            <h1>
              Jorge Emmanuel
              <br />
              <span>Roldán Márquez</span>
            </h1>

            <div className="hero-specialties">
              <span>SOFTWARE</span>
              <i />
              <span>WEB</span>
              <i />
              <span>MOBILE</span>
            </div>

            <p className="hero-role">
              Estudiante de Ingeniería en
              Tecnologías de Cómputo y
              Telecomunicaciones.
            </p>

            <p className="hero-description">
              Desarrollo aplicaciones y experiencias
              digitales combinando programación,
              diseño y tecnología para convertir ideas
              en proyectos funcionales.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#proyectos"
              >
                Explorar proyectos
                <Arrow />
              </a>

              <a
                className="button button-secondary"
                href="#contacto"
              >
                Contactarme
              </a>
            </div>

            <div className="hero-social">
              <span>ENCUÉNTRAME EN</span>

              <div>
                <a
                  href="https://github.com/rzxldz"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <Arrow />
                </a>

                <a
  href="https://www.linkedin.com/in/jorge-emmanuel-roldán-márquez-499a13434"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
  <Arrow />
</a>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="visual-grid" />

            <div className="orbit orbit-outer">
              <div className="orbit-dot dot-one" />
            </div>

            <div className="orbit orbit-middle">
              <div className="orbit-dot dot-two" />
            </div>

            <div className="orbit orbit-inner" />

            <div className="visual-core">
              <span className="core-small">
                SYSTEM
              </span>

              <strong>
                BUILD
              </strong>

              <span className="core-status">
                <i />
                online
              </span>
            </div>

            <div className="float-panel code-panel">
              <span className="panel-number">
                01
              </span>

              <code>
                const idea = build();
              </code>
            </div>

            <div className="float-panel stack-panel">
              <span>
                STACK
              </span>

              <strong>
                WEB / MOBILE
              </strong>
            </div>

            <div className="float-panel status-panel">
              <span>
                STATUS
              </span>

              <strong>
                LEARNING
              </strong>
            </div>

            <div className="visual-coordinate coordinate-one">
              19.4326° N
            </div>

            <div className="visual-coordinate coordinate-two">
              99.1332° W
            </div>
          </div>
        </div>

        <a
          className="scroll-indicator"
          href="#sobre-mi"
        >
          <span>SCROLL TO EXPLORE</span>

          <i>↓</i>
        </a>
      </section>

      <section
        id="sobre-mi"
        className="section container"
      >
        <div className="section-heading">
          <span>01</span>

          <h2>
            Sobre mí
          </h2>

          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div>
            <p className="about-lead">
              Tecnología, creatividad y ganas de
              construir cosas que realmente funcionen.
            </p>
          </div>

          <div className="about-copy">
            <p>
              Soy estudiante de séptimo semestre de
              Ingeniería en Tecnologías de Cómputo y
              Telecomunicaciones en la Universidad
              Iberoamericana Ciudad de México.
            </p>

            <p>
              Me interesa especialmente el desarrollo de
              software, el desarrollo web y móvil, y la
              creación de proyectos donde la tecnología
              pueda convertirse en una experiencia útil
              para otras personas.
            </p>

            <p>
              Actualmente busco mi primera oportunidad
              profesional como becario para aplicar mis
              conocimientos, aprender de un equipo y
              continuar desarrollándome en el área
              tecnológica.
            </p>
          </div>
        </div>

        <div className="status-grid">
          <article>
            <span>
              SEMESTRE
            </span>

            <strong>
              7º
            </strong>

            <small>
              Actualmente
            </small>
          </article>

          <article>
            <span>
              UNIVERSIDAD
            </span>

            <strong>
              IBERO
            </strong>

            <small>
              Ciudad de México
            </small>
          </article>

          <article>
            <span>
              ENFOQUE
            </span>

            <strong>
              Software
            </strong>

            <small>
              Web & Mobile
            </small>
          </article>

          <article>
            <span>
              OBJETIVO
            </span>

            <strong>
              Becario
            </strong>

            <small>
              Primera experiencia
            </small>
          </article>
        </div>
      </section>

      <section
        id="proyectos"
        className="projects-section"
      >
        <div className="container">
          <div className="section-heading">
            <span>02</span>

            <h2>
              Proyectos
            </h2>

            <div className="section-line" />
          </div>

          <div className="projects-header">
            <p>
              Una selección de proyectos donde he
              trabajado desarrollo, interacción,
              diseño e implementación.
            </p>

            <span>
              SELECTED WORK · 2026
            </span>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className="project"
                key={project.number}
              >
                <div className="project-preview-wrapper">
                  <ProjectPreview
                    number={project.number}
                  />

                  <span className="project-index">
                    {project.number}
                  </span>
                </div>

                <div className="project-content">
                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-work">
                    <span>
                      MI TRABAJO
                    </span>

                    <p>
                      {project.work}
                    </p>
                  </div>

                  <div className="project-tags">
                    {project.tech.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
  <a
    href={project.live}
    target={project.live !== "#" ? "_blank" : undefined}
    rel={project.live !== "#" ? "noreferrer" : undefined}
  >
    Ver proyecto
    <Arrow />
  </a>

  <a
    href={project.github}
    target={project.github !== "#" ? "_blank" : undefined}
    rel={project.github !== "#" ? "noreferrer" : undefined}
  >
    GitHub
    <Arrow />
  </a>
</div>
                </div>
              </article>
            ))}
          </div>

          <div className="future-project">
            <span>
              PRÓXIMAMENTE
            </span>

            <div>
              <strong>
                Aplicación móvil de seguimiento de ejercicio
              </strong>

              <p>
                Se añadirá cuando exista nuevamente una
                versión funcional que pueda mostrarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="section container"
      >
        <div className="section-heading">
          <span>03</span>

          <h2>
            Habilidades
          </h2>

          <div className="section-line" />
        </div>

        <div className="skills-intro">
          <p>
            Tecnologías y herramientas con las que he
            trabajado durante mi formación académica y
            en proyectos personales.
          </p>

          <span>
            SIN PORCENTAJES ARBITRARIOS.
            <br />
            SOLO EXPERIENCIA REAL.
          </span>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(
            ([category, items], index) => (
              <article
                className="skill-card"
                key={category}
              >
                <div className="skill-top">
                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {category}
                  </h3>
                </div>

                <div className="skill-items">
                  {items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section
        id="trayectoria"
        className="section container"
      >
        <div className="section-heading">
          <span>04</span>

          <h2>
            Trayectoria
          </h2>

          <div className="section-line" />
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">
              2023 — 2028
            </div>

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-content">
              <span>
                EDUCACIÓN
              </span>

              <h3>
                Ingeniería en Tecnologías de Cómputo y
                Telecomunicaciones
              </h3>

              <h4>
                Universidad Iberoamericana Ciudad de México
              </h4>

              <p>
                Formación en programación, desarrollo de
                software, bases de datos, tecnologías web,
                desarrollo móvil y sistemas
                computacionales.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">
              2026 — ACTUALIDAD
            </div>

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-content">
              <span>
                PROYECTOS PERSONALES
              </span>

              <h3>
                Desarrollo y experimentación
              </h3>

              <h4>
                Aprendizaje fuera del salón de clases
              </h4>

              <p>
                Desarrollo de proyectos web y aplicaciones
                para fortalecer conocimientos de
                programación, diseño e implementación de
                soluciones digitales.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="current-section">
        <div className="container">
          <div className="current-top">
            <p className="eyebrow">
              05 · ACTUALMENTE
            </p>

            <h2>
              Preparado para
              <br />
              el siguiente paso.
            </h2>

            <p className="current-description">
              Busco mi primera oportunidad profesional en
              tecnología o desarrollo de software.
            </p>
          </div>

          <div className="goals-grid">
            <article>
              <span>
                01
              </span>

              <div>
                <strong>
                  Aprender
                </strong>

                <p>
                  Seguir fortaleciendo mis conocimientos
                  técnicos trabajando sobre problemas
                  reales.
                </p>
              </div>
            </article>

            <article>
              <span>
                02
              </span>

              <div>
                <strong>
                  Crear
                </strong>

                <p>
                  Convertir ideas en proyectos funcionales
                  y experiencias digitales bien
                  construidas.
                </p>
              </div>
            </article>

            <article>
              <span>
                03
              </span>

              <div>
                <strong>
                  Crecer
                </strong>

                <p>
                  Obtener experiencia profesional y
                  aprender trabajando junto a otros
                  desarrolladores.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span>06</span>

          <h2>
            Más allá del código
          </h2>

          <div className="section-line" />
        </div>

        <div className="interests-grid">
          <article>
            <div className="interest-icon">
              ♫
            </div>

            <span>
              01
            </span>

            <h3>
              Música
            </h3>

            <p>
              Forma parte importante de mi día a día y
              también ha influido en algunos de mis
              proyectos personales.
            </p>
          </article>

          <article>
            <div className="interest-icon">
              ◉
            </div>

            <span>
              02
            </span>

            <h3>
              Fotografía
            </h3>

            <p>
              Me interesa la fotografía y la creación de
              contenido visual como otra manera de
              explorar ideas.
            </p>
          </article>

          <article>
            <div className="interest-icon">
              ✦
            </div>

            <span>
              03
            </span>

            <h3>
              Viajes
            </h3>

            <p>
              Me gusta conocer nuevos lugares, culturas y
              perspectivas diferentes fuera de mi
              entorno cotidiano.
            </p>
          </article>
        </div>
      </section>

      <section
        id="contacto"
        className="contact-section"
      >
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="container contact-grid">
          <div>
            <p className="contact-label">
              CONTACTO · 07
            </p>

            <h2>
              ¿Construimos
              <br />
              algo juntos?
            </h2>
          </div>

          <div className="contact-content">
            <p>
              Estoy abierto a oportunidades de becaría,
              prácticas profesionales y proyectos
              relacionados con tecnología y desarrollo
              de software.
            </p>

            <a
              className="email-link"
              href="mailto:joremmarold@gmail.com"
            >
              joremmarold@gmail.com
              <Arrow />
            </a>

            <div className="contact-links">
              <a
                href="https://github.com/rzxldz"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <Arrow />
              </a>

              <a href="#">
                LinkedIn
                <Arrow />
              </a>

              <a href="/cv.pdf">
                Descargar CV
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-name">
          <strong>
            Jorge Emmanuel Roldán Márquez
          </strong>

          <span>
            Portfolio · 2026
          </span>
        </div>

        <div className="footer-center">
          Diseñado y desarrollado con intención.
        </div>

        <a href="#inicio">
          Volver arriba
          <span>↑</span>
        </a>
      </footer>
    </main>
  );
}