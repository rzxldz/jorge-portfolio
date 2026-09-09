import { ImageResponse } from "next/og";

export const alt =
  "Jorge Emmanuel Roldán Márquez — Software, Web & Mobile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#090a0c",
          color: "#f5f4ef",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            right: -80,
            top: -100,
            background:
              "radial-gradient(circle, rgba(139,125,255,0.33), rgba(139,125,255,0))",
          }}
        />

        {/* Content */}
        <div
          style={{
            padding: "75px 85px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
  style={{
    display: "flex",
    alignItems: "center",
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-1px",
  }}
>
  <span>JR</span>
  <span style={{ color: "#8b7dff" }}>.</span>
</div>

            <div
              style={{
                fontSize: 16,
                color: "#8b7dff",
                letterSpacing: "4px",
                fontWeight: 700,
              }}
            >
              PORTFOLIO · 2026
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.9,
                letterSpacing: "-6px",
                fontWeight: 800,
              }}
            >
              Jorge Emmanuel
            </div>

            <div
              style={{
                fontSize: 88,
                lineHeight: 0.9,
                letterSpacing: "-6px",
                fontWeight: 800,
              }}
            >
              Roldán Márquez
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 38,
                gap: 18,
                alignItems: "center",
                color: "#8b7dff",
                fontSize: 18,
                letterSpacing: "4px",
                fontWeight: 700,
              }}
            >
              <span>SOFTWARE</span>
              <span style={{ color: "#666970" }}>•</span>
              <span>WEB</span>
              <span style={{ color: "#666970" }}>•</span>
              <span>MOBILE</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                maxWidth: 700,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#9699a1",
              }}
            >
              Ingeniería en Tecnologías de Cómputo y Telecomunicaciones
            </div>

            <div
              style={{
                display: "flex",
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 999,
                fontSize: 16,
              }}
            >
              Ver proyectos ↗
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}