import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#1B2A4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 76,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: "2px",
          }}
        >
          MK
        </span>
      </div>
    ),
    { ...size }
  );
}
