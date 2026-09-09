"use client";

import { useState } from "react";

export type CaseStudyData = {
  objective: string;
  work: string;
  challenge: string;
  solution: string;
  result: string;
};

type Props = {
  data: CaseStudyData;
};

export default function ProjectCaseStudy({ data }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      number: "01",
      title: "Objetivo",
      text: data.objective,
    },
    {
      number: "02",
      title: "Mi trabajo",
      text: data.work,
    },
    {
      number: "03",
      title: "Reto",
      text: data.challenge,
    },
    {
      number: "04",
      title: "Solución",
      text: data.solution,
    },
    {
      number: "05",
      title: "Resultado",
      text: data.result,
    },
  ];

  const previous = () => {
    setIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className={`project-case-study ${open ? "open" : ""}`}>
      <button
        type="button"
        className="project-case-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <span>
          {open ? "Cerrar caso de estudio" : "Ver caso de estudio"}
        </span>

        <span className="project-case-toggle-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      <div className="project-case-body">
        <div className="project-case-body-inner">
          <div className="project-case-top">
            <span className="project-case-progress">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            <div className="project-case-arrows">
              <button
                type="button"
                onClick={previous}
                aria-label="Caso anterior"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Caso siguiente"
              >
                →
              </button>
            </div>
          </div>

          <article key={index} className="project-case-slide">
            <span className="project-case-number">
              {slides[index].number}
            </span>

            <div>
              <span className="project-case-label">
                {slides[index].title}
              </span>

              <p>{slides[index].text}</p>
            </div>
          </article>

          <div className="project-case-dots">
            {slides.map((slide, dotIndex) => (
              <button
                key={slide.number}
                type="button"
                className={dotIndex === index ? "active" : ""}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Ver ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}