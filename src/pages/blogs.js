import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroSection from "../components/heroSection/index";
import Layout from "../components/layout/index";
import SEO from "../components/seo";

const BlogsPage = () => {
  const data = useStaticQuery(graphql`
    query SiteBlogsQuery {
      site {
        siteMetadata {
          heroSectionData {
            blogs {
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
      <SEO title="Blogs" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.blogs}
      />
    </Layout>
  );
};

export default BlogsPage;
