import Head from "next/head";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { Chakra } from "../lib/chakra";
import theme from "../lib/theme";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ediz Yurdakul" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1A202C"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@edizyurdakul" />
        <meta name="twitter:creator" content="@edizyurdakul" />
        <meta name="twitter:image" content="/card.png" />
        <meta
          property="og:site_name"
          content="Ediz Yurdakul - A front end web develope"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8Q6S7X5L8N`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8Q6S7X5L8N');
          `,
        }}
      />
      <Chakra cookies={pageProps.cookies}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Chakra>
    </>
  );
}
