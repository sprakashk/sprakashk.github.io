// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"
const ProjectCard = ({ projects }) => {
  console.log("projects", projects)
  return (
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <div key={index} className="project-container">
            <div>
              <h3>{project.title}</h3>
              <p>{project.isWebOrMobile}jsk</p>
            </div>
            <div>
              <div>
                {" "}
                <p>{project.description}</p>
              </div>
              <div>
                <p>Development duration: 2019</p>
                <p>
                  {" "}
                  Tech stack:{" "}
                  {project.techStack.map((techStack, index) => {
                    return (
                      <>
                        <span key="index" class="tech-stack-text">
                          {techStack}
                        </span>
                      </>
                    )
                  })}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ProjectCard.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectCard.defaultProps = {
  siteTitle: ``,
}

export default ProjectCard
