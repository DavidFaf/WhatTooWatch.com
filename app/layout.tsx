import "@styles/globals.css";

import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "WhatTooWatch: Discover the best movies on the internet",
  description: "Find movies to watch based on your mood",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="main font-sans">
        <main className="app container">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
