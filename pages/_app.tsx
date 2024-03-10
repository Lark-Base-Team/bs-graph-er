import "reset-css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@/i18n";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
