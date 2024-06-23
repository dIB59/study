import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Byte School",
  description: "Learn to code with Byte School",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
