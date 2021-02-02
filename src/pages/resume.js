import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroSection from "../components/heroSection/index";
import Layout from "../components/layout/index";
import SEO from "../components/seo";

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query SiteResumeQuery {
      site {
        siteMetadata {
          heroSectionData {
            resume {
              bgImage
              fgImage
              title
              subTitle
              link
            }
          }
          resumeUrl
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Resume" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.resume}
      >
        <a href={data.site.siteMetadata.resumeUrl} target="_blank" download>
          <button>Click here for the Resume</button>
        </a>
      </HeroSection>
    </Layout>
  );
};

export default ResumePage;
