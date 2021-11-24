import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Chakra } from "../lib/chakra";
import theme from "../lib/theme";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ediz Yurdakul - A front end web developer" />
        <meta name="author" content="Ediz Yurdakul" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@edizyurdakul" />
        <meta name="twitter:creator" content="@edizyurdakul" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
      </Head>{" "}
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
