// "use client"

import react from "react";
import "./globals.css";
import React from "react";


export default function RootLayout({children} : {children :  React.ReactNode} ){
  return(
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}