import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Message</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world! Message</p>
    </div>
  )
}

export default IndexPage
