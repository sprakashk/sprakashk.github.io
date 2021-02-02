import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroSection from "../components/heroSection/index";
import Layout from "../components/layout/index";
import SEO from "../components/seo";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query SiteAboutQuery {
      site {
        siteMetadata {
          heroSectionData {
            about {
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
      <SEO title="About" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.about}
      />
    </Layout>
  );
};

export default AboutPage;
