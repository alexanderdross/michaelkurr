import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 192,
          height: 192,
          borderRadius: 38,
          background: "#1B2A4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 80,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: "2px",
          }}
        >
          MK
        </span>
      </div>
    ),
    { width: 192, height: 192 }
  );
}
