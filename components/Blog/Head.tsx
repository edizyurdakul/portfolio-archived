import NextHead from "next/head";
import { useRouter } from "next/router";
import { MetaProps } from "../../types/postLayout";

export const WEBSITE_HOST_URL = "http://localhost:3000";

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: "Ediz Yurdakul - Frontend Developer",
    description: " Frontend Web Developer.  ",
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: "website",
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Hunter Chang - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@huntarosan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && <meta property="article:published_time" content={meta.date} />}
    </NextHead>
  );
};

export default Head;
