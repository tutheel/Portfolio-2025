import Head from "next/head";

type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
};

export default function SeoHead({
  title,
  description,
  keywords,
  image,
  url,
}: SeoHeadProps) {
  const siteTitle = "Sushil Patil | Creative Developer & Designer";
  const metaTitle = title ?? siteTitle;
  const metaDescription =
    description ??
    "Portfolio of Sushil Patil, a creative developer and designer crafting immersive web experiences, animations, and bold digital products.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const canonicalUrl = url ?? (baseUrl ? `${baseUrl}/` : undefined);
  const imagePath = image ?? "/Sushil.png";
  const absoluteImage = imagePath.startsWith("http")
    ? imagePath
    : baseUrl
      ? `${baseUrl}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`
      : undefined;
  const ogImage = absoluteImage ?? imagePath;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sushil Patil",
    jobTitle: "Creative Developer & Designer",
    description: metaDescription,
    url: canonicalUrl,
    image: absoluteImage,
  };

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords?.length ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#0b0315" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
