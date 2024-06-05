import localFont from "next/font/local";

export const prata = localFont({
  variable: "--font-default",
  src: [
    // {
    //   path: "./Prata-Bold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
    {
      path: "./Prata-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "./Prata-Medium.ttf",
    //   weight: "500",
    //   style: "normal",
    // },
  ],
});
