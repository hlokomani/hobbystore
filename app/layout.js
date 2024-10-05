import { Inter } from "next/font/google";
import StoreProvider from '@/components/storeProvider';
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/styles.css";
import "@/styles/swiper.css";
import "@/styles/iconsfont.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HarmonyHub",
  description: "Everything Guitars, All In One Place",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}