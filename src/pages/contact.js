import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/index";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection/index";
const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          projectDetails {
            title
            description
            techStack
            role
          }
          heroSectionData {
            contact {
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
      <SEO title="Contact" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.contact}
      />
    </Layout>
  );
};

export default ContactPage;
