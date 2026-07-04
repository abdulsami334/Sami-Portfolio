import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          color: "#f6f3ed",
          background: "linear-gradient(135deg, #0c0f15, #0d9488)",
          fontSize: 28,
          fontWeight: 700
        }}
      >
        SG
      </div>
    ),
    size
  );
}
