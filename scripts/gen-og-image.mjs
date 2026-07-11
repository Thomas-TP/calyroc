import { ImageResponse } from "next/og";
import { writeFile } from "node:fs/promises";

const element = {
  type: "div",
  props: {
    style: {
      width: "1200px",
      height: "630px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#0B0B0C",
      padding: "80px",
      fontFamily: "Space Grotesk",
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "88px",
            height: "88px",
            borderRadius: "24px",
            backgroundColor: "#C9A567",
            color: "#0B0B0C",
            fontSize: "44px",
            fontWeight: 700,
          },
          children: "C",
        },
      },
      {
        type: "div",
        props: {
          style: { display: "flex", flexDirection: "column" },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontSize: "28px",
                  color: "#C9A567",
                  textTransform: "uppercase",
                  letterSpacing: "6px",
                  marginBottom: "24px",
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
                  color: "#F5F3EF",
                  lineHeight: 1,
                },
                children: "Calyroc",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "36px",
                  color: "#8C887F",
                  marginTop: "24px",
                },
                children: "Sites vitrines & e-commerce sur mesure",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "30px",
                  color: "#C9A567",
                  marginTop: "36px",
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
