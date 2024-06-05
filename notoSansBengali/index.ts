import localFont from "next/font/local";

export const notoSansBengali = localFont({
  variable: "--font-noto-sans",
  src: [
    {
      path: "./NotoSansBengali-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./NotoSansBengali-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});
