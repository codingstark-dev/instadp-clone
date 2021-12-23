import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';
import { SiteDetails} from "../utils/setup"

export const WEBSITE_HOST_URL = SiteDetails.website;

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: SiteDetails.title,
    description: SiteDetails.description,
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      
      <link rel="icon" href="/favicon.png" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={SiteDetails.website_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {/* <meta property="og:image" content={meta.image} /> */}
      <meta name="theme-color" content="#2563eb"></meta>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
