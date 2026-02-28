import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#1B2A4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: "0.5px",
          }}
        >
          MK
        </span>
      </div>
    ),
    { ...size }
  );
}
