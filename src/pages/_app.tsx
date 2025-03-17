/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Navbar from "@/components/fragments/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import Toaster from "@/components/ui/Toaster";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const disabledNavbar = ["auth", "admin"];
  const { pathname } = useRouter();
  const [toaster, setToaster] = useState<any>({});

  useEffect(() => {
    if (Object.keys(toaster).length > 0) {
      setTimeout(() => {
        setToaster({});
      }, 3000);
    }
  }, [toaster]);

  return (
    <SessionProvider session={session}>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      {!disabledNavbar.includes(pathname.split("/")[1]) && <Navbar />}
      <div>
        <Component {...pageProps} setToaster={setToaster} />
      </div>
      {Object.keys(toaster).length > 0 && (
        <Toaster
          variant={toaster.variant}
          message={toaster.message}
          setToaster={setToaster}
        />
      )}
    </SessionProvider>
  );
}
