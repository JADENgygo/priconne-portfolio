import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="プリコネRのツール・ゲーム集" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta
          property="og:url"
          content="https://priconne-portfolio.vercel.app"
        />
        <meta property="og:title" content="闇プリン開発室" />
        <meta property="og:description" content="プリコネRのツール・ゲーム集" />
        <meta
          property="og:image"
          content="https://priconne-portfolio.vercel.app/img/peko.png"
        />
        <link rel="icon" href="/img/peko.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
