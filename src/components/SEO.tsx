import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  schema?: object;
  noIndex?: boolean;
};

export default function SEO({ title, description, keywords, image,  noIndex, schema }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      {description && (
        <meta name="description" content={description} />
      )}

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
    </Helmet>
  );
}
