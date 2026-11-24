import { ImageResponse } from "next/og";
import { theme } from "@/config/theme";

export const alt = "VULFAX — Technology · Innovation · Future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: theme.colors.void,
          backgroundImage:
            "radial-gradient(700px circle at 78% 18%, rgba(101,117,255,0.42), transparent 62%), radial-gradient(600px circle at 12% 92%, rgba(139,92,246,0.30), transparent 65%)",
          color: theme.colors.ink,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 20,
            letterSpacing: "6px",
            color: theme.colors.muted,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: theme.colors.accent,
            }}
          />
          TECHNOLOGY · INNOVATION · FUTURE
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              fontWeight: 700,
              letterSpacing: "18px",
              lineHeight: 1,
            }}
          >
            VULFAX
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 34,
              color: theme.colors.muted,
              letterSpacing: "-0.5px",
            }}
          >
            Engineering the systems behind what comes next.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(244,246,252,0.12)",
            paddingTop: 26,
            fontSize: 20,
            color: theme.colors.muted,
            letterSpacing: "3px",
          }}
        >
          <span>PREMIUM DIGITAL SYSTEMS</span>
          <span style={{ color: theme.colors.accent }}>VULFAX ©</span>
        </div>
      </div>
    ),
    size,
  );
}
