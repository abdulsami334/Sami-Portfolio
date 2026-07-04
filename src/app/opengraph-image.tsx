import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} - Backend & AI Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f6f3ed",
          background: "linear-gradient(135deg, #0c0f15 0%, #111923 54%, #0b3b3a 100%)"
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, textTransform: "uppercase", color: "#7dd3c7" }}>
          Backend + AI Engineering
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ display: "flex", marginTop: 24, maxWidth: 900, fontSize: 34, lineHeight: 1.25, color: "#d7dedc" }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 26, color: "#b8c4c0" }}>
          <span>FastAPI</span>
          <span>Node.js</span>
          <span>Agentic AI</span>
          <span>RAG</span>
          <span>Production SaaS</span>
        </div>
      </div>
    ),
    size
  );
}
