import localFont from "next/font/local";

export const fivoSansModern = localFont({
  variable: "--font-default",
  src: [
    {
      path: "./FivoSansModern-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./FivoSansModern-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FivoSansModern-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});
