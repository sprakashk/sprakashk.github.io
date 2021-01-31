import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard/index"
import HeroSection from "../components/heroSection/index"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectsAndHeroQuery {
      site {
        siteMetadata {
          projectDetails {
            title
            description
            techStack
            role
          }
          heroSectionData {
            work {
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
  `)
  return (
    <Layout>
      <SEO title="Work" />
      <HeroSection
        heroSectionData={data.site.siteMetadata.heroSectionData.work}
      />
      <ProjectCard projects={data.site.siteMetadata.projectDetails} />
    </Layout>
  )
}

export default AboutPage
