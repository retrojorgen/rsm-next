// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="../static/site.webmanifest" />
          <link rel="mask-icon" href="../static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="retrospillmessen">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument