import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import HeroSection from "../components/heroSection/index";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteHeroQuery {
      site {
        siteMetadata {
          heroSectionData {
            home {
              bgImage
              fgImage
              title
              subTitle
              link
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.home}
      />
    </Layout>
  );
};

export default IndexPage;
