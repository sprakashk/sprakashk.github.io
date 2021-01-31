import React from "react";
// import { Link } from "gatsby"

import Layout from "../components/layout/index";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="Resume" />

    <a href="../resumes/Satyaprakash_Resume.pdf" download>
      <button>Downlaod the Resume from here</button>
    </a>
  </Layout>
);

export default AboutPage;
