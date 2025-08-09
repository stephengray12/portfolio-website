// app/opengraph-image.js
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// export const runtime = "edge"; // optional

export default async function OpenGraphImage() {
  const title = "Stephen Gray — Portfolio";
  const subtitle = "CS Junior @ UA Little Rock • BAS → Software Engineering";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0B1220 0%, #0F172A 40%, #111827 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>
          {subtitle}
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 20,
            display: "flex",
            gap: 24,
            opacity: 0.85,
          }}
        >
          <span>React • Next.js • Tailwind • Framer Motion</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
