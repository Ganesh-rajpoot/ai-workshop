import { ImageResponse } from "next/og";
import { shortAddress, site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

/** Social sharing card drawn at build time; no external assets or fonts required. */
export function renderOgImage() {
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
          color: "#fff",
          background:
            "radial-gradient(circle at 85% 20%, rgba(139,92,246,0.55), transparent 45%), radial-gradient(circle at 70% 90%, rgba(34,211,238,0.35), transparent 40%), #080B18",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#67e8f9" }}>{site.institute}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Discover AI. Build Ideas.
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#c4b5fd" }}>
            Shape Your Future.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#a8b3d1" }}>
            AI Training Workshop for students in Classes 6–12 and colleges
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a8b3d1" }}>{shortAddress}</div>
      </div>
    ),
    ogSize,
  );
}
