const proejctEnums = {
  html: "HTML",
  css: "CSS",
  javascript: "Javascript",
  react: "React",
  vueJS: "VueJS",
  angularJS: "AngularJS",
  bootstrap: "Bootstrap",
  jquery: "jQuery"
};
const devRolesEnum = {
  uiDev: "UI Developer",
  frontendDev: "Frontend Developer",
  uiuxDev: "UI/UX developer"
};
const clientDeviceType = {
  web: "Web",
  mobile: "Mobile",
  tablet: "Tablet"
};
module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Satya`,
    description: `Demonstrating my work, services and interests.`,
    author: `Satyaprakash kumawat`,
    navItems: [
      {
        key: "work",
        displayName: "Work",
        link: "/work"
      },
      {
        key: "blogs",
        displayName: "Blogs",
        link: "/blogs"
      },
      {
        key: "about",
        displayName: "About",
        link: "/about"
      },
      {
        key: "contact",
        displayName: "Contact",
        link: "/contact"
      },
      {
        key: "resume",
        displayName: "Resume",
        link: "/resume"
      }
    ],
    projectDetails: [
      {
        title: "Paytm Credit Score",
        description:
          "A free credit score product by paytm. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["web"]
      },
      {
        title: "Paytm Merchant Cash Advancement",
        description:
          "A merchant can avail business loan online. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["mobile"]
      },
      {
        title: "Paytm Bureau base Loans",
        description:
          "A merchant can avail business loan online.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["mobile"]
      },
      {
        title: "Paytm Bureau base Loans",
        description:
          "A merchant can avail business loan online.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["mobile"]
      },
      {
        title: "Paytm Bureau base Loans",
        description:
          "A merchant can avail business loan online.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["mobile"]
      },
      {
        title: "Paytm Bureau base Loans",
        description:
          "A merchant can avail business loan online.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        techStack: [proejctEnums["javascript"], proejctEnums["css"]],
        role: devRolesEnum["frontendDev"],
        isWebOrMobile: clientDeviceType["mobile"]
      }
    ],
    heroSectionData: {
      home: {
        bgImage: "",
        fgImage: "",
        title: `I am Satyaprakash, A UI engineer and artist.`,
        subTitle:
          "I love UI development and talking about page rendering, optimisiations etc. Having 4+ years of UI+Frontend development experience. Well versed with working on large scale product and creating scalable mobile and web applications.",
        link: ""
      },
      work: {
        bgImage: "",
        fgImage: "",
        title: `I'm obsessed with improving 
        the human condition`,
        subTitle: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.vk.`,
        link: ""
      },
      blogs: {
        bgImage: "",
        fgImage: "",
        title: "",
        subTitle: "",
        link: ""
      },
      about: {
        bgImage: "",
        fgImage: "",
        title: "",
        subTitle: "",
        link: ""
      },
      contact: {
        bgImage: "",
        fgImage: "",
        title: "",
        subTitle: "",
        link: ""
      },
      resume: {
        bgImage: "",
        fgImage: "",
        title: "",
        subTitle: "",
        link: ""
      }
    }
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
