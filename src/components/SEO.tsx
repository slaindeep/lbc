import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl,
  ogImage = 'https://lumi-blue.com/og-image.jpg' 
}: SEOProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonicalUrl} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* Additional tags for SEO */}
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />
      <meta name='language' content='English' />
    </Helmet>
  );
};

export default SEO;