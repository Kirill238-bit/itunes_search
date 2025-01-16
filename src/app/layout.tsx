import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto =Roboto({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "itunes_search",
  description: "test app on next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
