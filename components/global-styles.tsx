// components/GlobalStyles.js
import * as React from 'react'
import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const GlobalStyles = (): React.ReactElement => (
  <>
    <BaseStyles />
    <Global
      styles={css`
        @font-face {
          font-family: 'Caslon';
          src: url('/fonts/caslon.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @import url('https://p.typekit.net/p.css?s=1&k=eka5yqu&ht=tk&f=51136.51137&a=95066629&app=typekit&e=css');

        @font-face {
          font-family: 'schwarzkopf-new';
          src: url('https://use.typekit.net/af/0e0201/00000000000000007737220f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('woff2'),
            url('https://use.typekit.net/af/0e0201/00000000000000007737220f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('woff'),
            url('https://use.typekit.net/af/0e0201/00000000000000007737220f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('opentype');
          font-display: auto;
          font-style: normal;
          font-weight: 400;
          font-stretch: normal;
        }

        @font-face {
          font-family: 'schwarzkopf-old';
          src: url('https://use.typekit.net/af/da64de/000000000000000077372210/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('woff2'),
            url('https://use.typekit.net/af/da64de/000000000000000077372210/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('woff'),
            url('https://use.typekit.net/af/da64de/000000000000000077372210/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
              format('opentype');
          font-display: auto;
          font-style: normal;
          font-weight: 400;
          font-stretch: normal;
        }

        .tk-schwarzkopf-new {
          font-family: 'schwarzkopf-new', sans-serif;
        }
        .tk-schwarzkopf-old {
          font-family: 'schwarzkopf-old', sans-serif;
        }
      `}
    />
  </>
)

export default GlobalStyles
