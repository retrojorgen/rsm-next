import Header from "./Header"
import Head from "next/head"

const Layout = props => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="copyright"
          content="Copyright (c) Retrospillmessen, all rights reserved."
        />
        <meta
          name="description"
          content="22.-23. juni 2019, Sandefjord. En av nordens største retrospill-messer."
        />
        <meta property="og:type" content="webpage" />
        <meta property="og:site_name" content="retrospillmessen.no" />
        <meta property="og:image" content="/static/retrospillmessen-logo.png" />
        <meta
          property="og:description"
          content="22.-23. juni 2019, Sandefjord. En av nordens største retrospill-messer."
        />
      </Head>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
