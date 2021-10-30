import Head from 'next/head'

function HeadTitle({title}) {
  return (
    <div>
      <Head>
        <title>Newz Hub | {title}</title>
        <link rel="shortcut icon" href="https://static.thenounproject.com/png/1072496-200.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

export default HeadTitle