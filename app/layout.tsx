import "../styles/globals.css";

import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title className="">rickk</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className="bg-[#fcfcfc]">
        <div className="max-w-xl py-8 mx-auto ">
          <Header />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
