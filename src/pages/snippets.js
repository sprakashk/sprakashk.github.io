import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/index";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection/index";
const SnippetsPage = () => {
  const data = useStaticQuery(graphql`
    query SiteSnippetsQuery {
      site {
        siteMetadata {
          heroSectionData {
            snippets {
              bgImage
              fgImage
              title
              subTitle
              link
            }
          }
          demoUrls {
            id
            url
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Code Snippets" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.snippets}
      />
      <div>
        {data.site.siteMetadata.demoUrls.map((demoUrl, index) => {
          return (
            <>
              <iframe
                height="265"
                style={{ width: 100 + "%" }}
                scrolling="no"
                title="Awesome custom drop-down"
                src={demoUrl.url}
                frameborder="no"
                loading="lazy"
                allowtransparency="true"
                allowfullscreen="true"
              ></iframe>
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default SnippetsPage;
