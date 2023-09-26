import "../styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"
import Header from "@/components/Header"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
        <Head>
          <title>Lopetetaan mopomiitit</title>
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp