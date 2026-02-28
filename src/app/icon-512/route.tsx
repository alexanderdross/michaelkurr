import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          borderRadius: 102,
          background: "#1B2A4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 210,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: "6px",
          }}
        >
          MK
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
