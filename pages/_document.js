import React, { Component } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID, pageview } from '../lib/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='eng'>
        <Head />
        <body>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-WVLBRQ4'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
          <div id='notifications'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
