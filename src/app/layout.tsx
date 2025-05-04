import "@/styles/globals.css";
import type { Metadata } from "next";
import { Noto_Serif_Hebrew } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/lib/query-provider";

const notoSerifHebrew = Noto_Serif_Hebrew({
  subsets: ["hebrew"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClayBay | חנות קרמיקה וגלריה",
  description: "גלו וקנו אמנות קרמית ייחודית מאמנים מוכשרים מכל העולם.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={notoSerifHebrew.className}>
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
