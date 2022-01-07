import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { GTM_ID, pageview } from '../lib/gtm';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      />
      <Script
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
