import { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>
        <div className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
          <Component {...pageProps} />
        </div>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default MyApp;
