import Link from 'next/link'
import Layout from '../components/PageLayout.js'
import Head from 'next/head'

export default () => (
  <Layout title="Retrospillmessen opplevelser" page="om">
    <Head>
        <title>Retrospillmessen 2019, 22. - 23. juni 2019</title>
        <meta property="og:title" content="Dette opplever du på Retrospillmessen, 22. - 23. juni 2019" />
        <meta property="og:url" content="https://www.retrospillmessen.no/om" />
    </Head>
    <div>Om oss</div>
  </Layout>
)