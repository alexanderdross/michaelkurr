import { ImageResponse } from "next/og";

export const alt = "Dr. Michael Kurr — Operator & Transformation Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #111D35 0%, #1B2A4A 50%, #243558 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "#C9A84C",
            }}
          />
          <span
            style={{
              color: "#C9A84C",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
            }}
          >
            Dr. Kurr Advisory
          </span>
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Dr. Michael Kurr
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "28px",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Operator & Transformation Leader · Fractional C-Level · Pharma & Life Sciences
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              color: "#C9A84C",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            MK
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "18px",
              marginLeft: "16px",
            }}
          >
            michaelkurr.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
