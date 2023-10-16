import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0" async />
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
