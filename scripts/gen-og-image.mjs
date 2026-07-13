import { ImageResponse } from "next/og";
import { readFile, writeFile } from "node:fs/promises";

const iconBuffer = await readFile("./scripts/logo-out/icon-mark.png");
const iconDataUri = `data:image/png;base64,${iconBuffer.toString("base64")}`;

// Canvas: 1200x630 (1.91:1) -- the one size that renders correctly across
// Facebook/Messenger/Instagram, X, LinkedIn, Slack, Discord, WhatsApp and
// iMessage. Content is horizontally CENTERED rather than left-aligned:
// several chat apps (WhatsApp, Telegram) crop link previews toward a
// centered square thumbnail, which would clip a left-aligned layout.
// Centering survives any reasonable crop from either side.
const element = {
  type: "div",
  props: {
    style: {
      position: "relative",
      width: "1200px",
      height: "630px",
      display: "flex",
      backgroundColor: "#0b0b0c",
      fontFamily: "Space Grotesk",
      overflow: "hidden",
    },
    children: [
      // Two faint decorative rock marks bleeding off both edges, symmetric
      // enough to keep the composition balanced around the centered text.
      {
        type: "img",
        props: {
          src: iconDataUri,
          width: "520",
          height: "520",
          style: {
            position: "absolute",
            top: "60px",
            left: "-220px",
            width: "520px",
            height: "520px",
            opacity: 0.07,
          },
        },
      },
      {
        type: "img",
        props: {
          src: iconDataUri,
          width: "520",
          height: "520",
          style: {
            position: "absolute",
            bottom: "-200px",
            right: "-180px",
            width: "520px",
            height: "520px",
            opacity: 0.07,
          },
        },
      },
      // Foreground content, centered, fully inside the safe zone.
      {
        type: "div",
        props: {
          style: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
            height: "630px",
            textAlign: "center",
          },
          children: [
            {
              type: "img",
              props: {
                src: iconDataUri,
                width: "80",
                height: "80",
                style: { width: "80px", height: "80px", marginBottom: "30px" },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#c9a567",
                  textTransform: "uppercase",
                  letterSpacing: "6px",
                  marginBottom: "20px",
                  display: "flex",
                },
                children: "SUISSE — STUDIO WEB",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "104px",
                  fontWeight: 700,
                  color: "#f5f3ef",
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  display: "flex",
                },
                children: "Calyroc",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "32px",
                  color: "#a8a39a",
                  marginTop: "24px",
                  display: "flex",
                },
                children: "Sites vitrines & e-commerce sur mesure",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "26px",
                  fontWeight: 600,
                  color: "#c9a567",
                  marginTop: "34px",
                  display: "flex",
                },
                children: "calyroc.com",
              },
            },
          ],
        },
      },
    ],
  },
};

const response = new ImageResponse(element, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());
await writeFile("./public/og-image.png", buffer);
console.log("Wrote public/og-image.png", buffer.length, "bytes");
