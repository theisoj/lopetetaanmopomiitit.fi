import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="fi">
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="keywords"
          content="Lopetetaan mopomiitit, lopetetaan mopomiitit, mopomiittien lopettaminen, mopomiitit uutiset yle"
        />
        <meta
          name="description"
          content="Lopetetaan mopomiitit -sivusto on perustettu mopomiittien lopettamiseksi. Sivustolla on tietoa mopomiiteistä ja niiden lopettamisesta."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document