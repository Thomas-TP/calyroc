import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/dictionary";
import { defaultLocale, isLocale } from "@/i18n/locales";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B0B0C",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,165,103,0.35) 0%, rgba(201,165,103,0) 70%)",
          display: "flex",
        }}
      />
      <div style={{ fontSize: 104, fontWeight: 700, color: "#F5F3EF", display: "flex" }}>
        Calyroc
      </div>
      <div style={{ fontSize: 32, color: "#C9A567", marginTop: 24, display: "flex" }}>
        {dictionary.home.eyebrow}
      </div>
    </div>,
    { ...size },
  );
}
