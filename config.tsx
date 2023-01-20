import Head from 'next/head'

const titleDefault = 'Grant!'
const url = 'https://granto.xyz/'
const description = 'The personal website of Grant Oesterling'
const author = 'Grant Oesterling'

const Header = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Grant,Grant Oesterling,Oesterling,Granto,Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={'/icons/share.png'} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_granto" />

        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
    </>
  )
}

export default Header
