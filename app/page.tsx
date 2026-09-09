import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectCaseStudy, {
  type CaseStudyData,
} from "@/components/ProjectCaseStudy";

type Project = {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  work: string;
  tech: string[];
  live: string;
  github: string;
  caseStudy?: CaseStudyData;
};

const projects: Project[] = [
  {
    number: "01",

    subtitle: "Sitio web empresarial",

    title: "Dial Transport",

    description:
      "Sitio web desarrollado para una empresa de renta y transporte de vehículos, enfocado en presentar de manera clara sus servicios, flotilla y opciones de contacto.",

    work:
      "Diseño y desarrollo de la interfaz, organización del contenido, estructura responsive y presentación visual de los servicios y la flotilla.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Netlify",
    ],

    live:
      "https://endearing-dialtransport-e7537d.netlify.app/",

    github:
      "https://github.com/rzxldz/Dial-Transport",

    caseStudy: {
      objective:
        "Convertir la información de una empresa de transporte en una experiencia web clara, profesional y fácil de recorrer.",

      work:
        "Trabajé en la estructura del sitio, la interfaz, la adaptación responsive y la presentación visual de los servicios y la flotilla.",

      challenge:
        "Presentar suficiente información comercial sin saturar la interfaz ni dificultar la navegación.",

      solution:
        "Organicé el contenido mediante una jerarquía visual clara, secciones diferenciadas y una experiencia adaptable a diferentes tamaños de pantalla.",

      result:
        "Un sitio web funcional y publicado que permite presentar digitalmente la empresa, sus servicios y su propuesta de valor.",
    },
  },

  {
    number: "02",

    subtitle: "Experiencia digital",

    title: "Experiencia Web Interactiva",

    description:
      "Experiencia digital que combina música, contenido, animaciones e interacción mediante una navegación progresiva.",

    work:
      "Diseño de la experiencia, desarrollo de la interfaz, navegación entre secciones, reproducción de audio y comportamiento responsive.",

    tech: [
      "Next.js",
      "TypeScript",
      "CSS",
      "Audio",
      "Vercel",
    ],

    live:
      "https://para-rebbeca.vercel.app/",

    github:
      "https://github.com/rzxldz/para-rebbeca",

    caseStudy: {
      objective:
        "Crear una experiencia web personalizada donde contenido, música, interacción y diseño formaran parte de una misma narrativa.",

      work:
        "Desarrollé la interfaz, navegación entre secciones, reproducción de audio, interacciones y comportamiento responsive.",

      challenge:
        "Mantener sincronizadas distintas interacciones y contenido multimedia sin perder una experiencia fluida, especialmente en dispositivos móviles.",

      solution:
        "Separé la experiencia en componentes y estados, controlando la navegación y el comportamiento del audio según la sección en la que se encuentra el usuario.",

      result:
        "Una experiencia web interactiva completa, publicada en Vercel y diseñada para funcionar tanto en escritorio como en móvil.",
    },
  },

  {
    number: "03",

    subtitle: "Identidad profesional",

    title: "Portfolio Personal",

    description:
      "Portfolio creado para presentar mis proyectos, habilidades, formación y perfil profesional mediante una experiencia clara y responsive.",

    work:
      "Arquitectura de contenido, diseño de interfaz, modo claro y oscuro, experiencia responsive, animaciones y despliegue.",

    tech: [
      "Next.js",
      "TypeScript",
      "CSS",
      "Git",
      "Vercel",
    ],

    live:
      "https://jorge-portfolio-mu.vercel.app/",

    github:
      "https://github.com/rzxldz/jorge-portfolio",
  },
];

const skills = [
  {
    number: "01",
    title: "Lenguajes",
    items: [
      "C",
      "Java",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "MATLAB",
    ],
  },

  {
    number: "02",
    title: "Desarrollo",
    items: [
      "Desarrollo web",
      "Desarrollo móvil",
      "Responsive",
      "POO",
      "Estructuras de datos",
    ],
  },

  {
    number: "03",
    title: "Datos y servicios",
    items: [
      "MySQL",
      "Firebase",
      "Google Maps API",
    ],
  },

  {
    number: "04",
    title: "Herramientas",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Google Colab",
      "Linux",
    ],
  },

  {
    number: "05",
    title: "Hardware",
    items: [
      "Arduino",
      "Raspberry Pi",
    ],
  },

  {
    number: "06",
    title: "Diseño",
    items: [
      "Canva",
      "Photoshop",
      "After Effects",
    ],
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
      <div className="project-preview">
        <ProjectCarousel
          alt="Dial Transport"
          images={[
            "/projects/dial/dial-transport-1.png",
            "/projects/dial/dial-transport-2.png",
            "/projects/dial/dial-transport-3.png",
          ]}
        />
      </div>
    );
  }

  if (number === "02") {
    return (
      <div className="project-preview">
        <ProjectCarousel
          alt="Experiencia Web Interactiva"
          images={[
            "/projects/rebbeca/rebbeca-1.png",
            "/projects/rebbeca/rebbeca-2.png",
            "/projects/rebbeca/rebbeca-3.png",
            "/projects/rebbeca/rebbeca-4.png",
          ]}
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
            PORTFOLIO · 2026
          </span>

          <h4>
            Jorge
            <br />
            Roldán
          </h4>

          <div className="screen-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="screen-pill">
            SOFTWARE · WEB · MOBILE
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}

      <header className="nav-shell">
        <nav
          className="navbar container"
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="brand">
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
              href="/cv.pdf"
              className="nav-cv"
              target="_blank"
              rel="noreferrer"
            >
              Ver CV
              <Arrow />
            </a>

            <MobileMenu />
          </div>
        </nav>
      </header>


      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}

      <section
        id="inicio"
        className="hero"
      >
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">

          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />

              Disponible para oportunidades profesionales
            </div>

            <p className="eyebrow">
              PORTFOLIO · 2026
            </p>

            <h1>
              Jorge Emmanuel
              <br />

              <span>
                Roldán Márquez
              </span>
            </h1>

            <div className="hero-specialties">
              <span>SOFTWARE</span>

              <i />

              <span>WEB</span>

              <i />

              <span>MOBILE</span>
            </div>

            <p className="hero-role">
              Estudiante de Ingeniería en Tecnologías
              de Cómputo y Telecomunicaciones.
            </p>

            <p className="hero-description">
              Desarrollo proyectos de software,
              aplicaciones y experiencias web mientras
              continúo fortaleciendo mis habilidades en
              tecnología.
            </p>

            <div className="hero-actions">
              <a
                href="#proyectos"
                className="button button-primary"
              >
                Ver proyectos
                <Arrow />
              </a>

              <a
                href="#contacto"
                className="button button-secondary"
              >
                Contactarme
              </a>
            </div>

            <div className="hero-social">
              <span>
                ENCUÉNTRAME EN
              </span>

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


          {/* SYSTEM / BUILD */}

          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="visual-grid" />

            <div className="orbit orbit-outer" />
            <div className="orbit orbit-middle" />
            <div className="orbit orbit-inner" />

            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />

            <div className="visual-core">
              <span className="core-small">
                SYSTEM
              </span>

              <strong>
                BUILD
              </strong>

              <span className="core-status">
                <i />
                ONLINE
              </span>
            </div>

            <div className="float-panel code-panel">
              <span>
                BUILD LOG
              </span>

              <code>
                {"const idea = build();"}
              </code>
            </div>

            <div className="float-panel status-panel">
              <span>
                STATUS
              </span>

              <strong>
                AVAILABLE
              </strong>
            </div>

            <div className="float-panel stack-panel">
              <span>
                STACK
              </span>

              <strong>
                WEB / MOBILE
              </strong>
            </div>

            <span className="visual-coordinate coordinate-one">
              BUILD · 2026
            </span>

            <span className="visual-coordinate coordinate-two">
              JR · SYSTEM
            </span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>
            SCROLL
          </span>

          <i>
            ↓
          </i>
        </div>
      </section>


      {/* ============================= */}
      {/* SOBRE MÍ */}
      {/* ============================= */}

      <section
        id="sobre-mi"
        className="section"
      >
        <div className="container">

          <div className="section-heading">
            <span>
              01
            </span>

            <h2>
              Sobre mí
            </h2>

            <div className="section-line" />
          </div>

          <div className="about-grid">

            <div className="about-left">
              <p className="about-lead">
                Tecnología, creatividad y ganas de
                construir cosas que realmente funcionen.
              </p>

              <div className="profile-photo-wrapper">

                <div className="profile-photo-ring">
                  <div className="profile-photo-clip">
                    <img
                      src="/profile/jorge.jpeg"
                      alt="Jorge Emmanuel Roldán Márquez"
                      className="profile-photo"
                    />
                  </div>
                </div>

                <div className="profile-photo-info">
                  <strong>
                    Jorge Roldán
                  </strong>

                  <span>
                    Ciudad de México
                  </span>
                </div>
              </div>
            </div>

            <div className="about-copy">
              <p>
                Soy estudiante de séptimo semestre de
                Ingeniería en Tecnologías de Cómputo y
                Telecomunicaciones en la Universidad
                Iberoamericana Ciudad de México.
              </p>

              <p>
                Me interesa el desarrollo de software,
                desarrollo web y móvil, así como la
                creación de proyectos que mezclen
                tecnología, funcionalidad y diseño.
              </p>

              <p>
                Busco seguir construyendo experiencia
                profesional mientras continúo
                desarrollando proyectos y fortaleciendo
                mis habilidades técnicas.
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
                Ingeniería
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
                Web · Mobile
              </small>
            </article>

            <article>
              <span>
                ESTADO
              </span>

              <strong>
                Disponible
              </strong>

              <small>
                Oportunidades profesionales
              </small>
            </article>
          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* PROYECTOS */}
      {/* ============================= */}

      <section
        id="proyectos"
        className="projects-section"
      >
        <div className="container">

          <div className="section-heading">
            <span>
              02
            </span>

            <h2>
              Proyectos
            </h2>

            <div className="section-line" />
          </div>

          <div className="projects-header">
            <p>
              Una selección de proyectos donde he
              trabajado en desarrollo, interfaz,
              interacción y publicación de experiencias
              digitales.
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
                  <span className="project-index">
                    {project.number}
                  </span>

                  <ProjectPreview
                    number={project.number}
                  />
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
                    {project.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.live}
                      target={
                        project.live !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.live !== "#"
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      Ver proyecto
                      <Arrow />
                    </a>

                    <a
                      href={project.github}
                      target={
                        project.github !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.github !== "#"
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      GitHub
                      <Arrow />
                    </a>
                  </div>


                  {/* CASE STUDY SOLO SI EXISTE */}

                  {project.caseStudy && (
                    <ProjectCaseStudy
                      data={project.caseStudy}
                    />
                  )}

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
                Aplicación móvil de seguimiento físico
              </strong>

              <p>
                Se añadirá al portfolio cuando exista
                nuevamente una versión funcional que
                pueda mostrarse correctamente.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* HABILIDADES */}
      {/* ============================= */}

      <section
        id="habilidades"
        className="section"
      >
        <div className="container">

          <div className="section-heading">
            <span>
              03
            </span>

            <h2>
              Habilidades
            </h2>

            <div className="section-line" />
          </div>

          <div className="skills-intro">
            <p>
              Tecnologías y herramientas con las que he
              trabajado durante mi formación y en
              proyectos personales.
            </p>

            <span>
              SIN PORCENTAJES
              <br />
              SOLO EXPERIENCIA REAL
            </span>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article
                className="skill-card"
                key={skill.number}
              >
                <div className="skill-top">
                  <h3>
                    {skill.title}
                  </h3>

                  <span>
                    {skill.number}
                  </span>
                </div>

                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* TRAYECTORIA */}
      {/* ============================= */}

      <section
        id="trayectoria"
        className="section"
      >
        <div className="container">

          <div className="section-heading">
            <span>
              04
            </span>

            <h2>
              Trayectoria
            </h2>

            <div className="section-line" />
          </div>

          <div className="timeline">

            <article className="timeline-item">
              <div className="timeline-date">
                2023 — ACTUALIDAD
              </div>

              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-content">
                <span>
                  EDUCACIÓN
                </span>

                <h3>
                  Ingeniería en Tecnologías de Cómputo
                  y Telecomunicaciones
                </h3>

                <h4>
                  Universidad Iberoamericana Ciudad de México
                </h4>

                <p>
                  Formación en programación,
                  desarrollo de software,
                  estructuras de datos,
                  tecnologías web,
                  sistemas computacionales
                  y telecomunicaciones.
                </p>
              </div>
            </article>


            <article className="timeline-item">
              <div className="timeline-date">
                ACTUALIDAD
              </div>

              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-content">
                <span>
                  PROYECTOS
                </span>

                <h3>
                  Desarrollo y experimentación
                </h3>

                <h4>
                  Proyectos personales
                </h4>

                <p>
                  Desarrollo de sitios,
                  aplicaciones y experiencias digitales
                  para fortalecer conocimientos técnicos
                  y llevar ideas a productos funcionales.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* ACTUALMENTE */}
      {/* ============================= */}

      <section className="current-section">
        <div className="container">

          <div className="current-top">

            <p className="eyebrow">
              ACTUALMENTE
            </p>

            <h2>
              El siguiente
              <br />
              paso.
            </h2>

            <p className="current-description">
              Busco continuar creciendo profesionalmente,
              aplicar lo que he aprendido y seguir
              construyendo experiencia dentro del área
              tecnológica.
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
                  técnicos mediante proyectos y
                  experiencia profesional.
                </p>
              </div>
            </article>

            <article>
              <span>
                02
              </span>

              <div>
                <strong>
                  Construir
                </strong>

                <p>
                  Convertir ideas en productos,
                  aplicaciones y experiencias digitales
                  funcionales.
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
                  Aprender trabajando junto a otros
                  desarrolladores y profesionales del
                  área.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* MÁS ALLÁ DEL CÓDIGO */}
      {/* ============================= */}

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <span>
              05
            </span>

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
                01 · AUDIO
              </span>

              <h3>
                Música
              </h3>

              <p>
                Forma parte de mi día a día y también
                ha influido en algunas de las
                experiencias digitales que desarrollo.
              </p>
            </article>


            <article>
              <div className="interest-icon">
                ◉
              </div>

              <span>
                02 · VISUAL
              </span>

              <h3>
                Fotografía
              </h3>

              <p>
                Me interesa la fotografía y la creación
                de contenido visual como otra forma de
                comunicar ideas.
              </p>
            </article>


            <article>
              <div className="interest-icon">
                ✦
              </div>

              <span>
                03 · EXPERIENCIAS
              </span>

              <h3>
                Viajes
              </h3>

              <p>
                Conocer nuevos lugares y perspectivas
                también influye en mi manera de observar,
                diseñar y crear.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* CONTACTO */}
      {/* ============================= */}

      <section
        id="contacto"
        className="contact-section"
      >
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="container contact-grid">

          <div>
            <p className="contact-label">
              CONTACTO · 2026
            </p>

            <h2>
              ¿Construimos
              <br />
              algo juntos?
            </h2>
          </div>


          <div className="contact-content">
            <p>
              Estoy abierto a oportunidades
              profesionales, prácticas y proyectos
              relacionados con tecnología y desarrollo
              de software.
            </p>

            <a
              href="mailto:joremmarold@gmail.com"
              className="email-link"
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

              <a
                href="https://www.linkedin.com/in/jorge-emmanuel-roldán-márquez-499a13434"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <Arrow />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
                <Arrow />
              </a>

            </div>
          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* FOOTER */}
      {/* ============================= */}

      <footer className="footer container">

        <div className="footer-name">
          <strong>
            Jorge Emmanuel Roldán Márquez
          </strong>

          <span>
            Software · Web · Mobile
          </span>
        </div>

        <div className="footer-center">
          © 2026
        </div>

        <a href="#inicio">
          Volver arriba
          <span aria-hidden="true">
            ↑
          </span>
        </a>

      </footer>

    </main>
  );
}