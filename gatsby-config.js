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
        key: "snippets",
        displayName: "Snippets",
        link: "/snippets"
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
        title: "Blogs | Crafted with deep UI knowledge",
        subTitle:
          "I spent most of my time on MDN, Medium articles, Codepen, React etc. Here are some of blogs which i have written till now. More to come. Stay tuned",
        link: ""
      },
      about: {
        bgImage: "",
        fgImage: "",
        title: "Frontend Web Developer",
        subTitle: "Having 4.5+ years of frontend web development experience",
        link: ""
      },
      snippets: {
        bgImage: "",
        fgImage: "",
        title: "Demo is better than theory",
        subTitle: "",
        link: ""
      },
      resume: {
        bgImage: "",
        fgImage: "",
        title: "Get to know my frontend development journey better",
        subTitle: "Check out my Resume below.",
        link: ""
      }
    },
    profiles: [
      {
        platform: "codepen",
        url: "https://codepen.io/pro_animator"
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/satyaprakash-kumawat-1708b38a/"
      }
    ],
    demoUrls: [
      {
        id: 1,
        url:
          "https://codepen.io/pro_animator/embed/RKQPyZ?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 2,
        url:
          "https://codepen.io/pro_animator/embed/zJpZxd?height=141&theme-id=light&default-tab=result"
      },
      {
        id: 3,
        url:
          "https://codepen.io/pro_animator/embed/MWaxryb?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 4,
        url:
          "https://codepen.io/pro_animator/embed/OJLwVPx?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 5,
        url:
          "https://codepen.io/pro_animator/embed/OKNZGB?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 6,
        url:
          "https://codepen.io/pro_animator/embed/WVeEOO?height=265&theme-id=light&default-tab=css,result"
      },
      {
        id: 7,
        url:
          "https://codepen.io/pro_animator/embed/OwLpow?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 8,
        url:
          "https://codepen.io/pro_animator/embed/GQXyad?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 9,
        url:
          "https://codepen.io/pro_animator/embed/BwwXwp?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 10,
        url:
          "https://codepen.io/pro_animator/embed/zRRNrq?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 11,
        url:
          "https://codepen.io/pro_animator/embed/MveNPe?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 12,
        url:
          "https://codepen.io/pro_animator/embed/JWONxx?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 13,
        url:
          "https://codepen.io/pro_animator/embed/QGGNzM?height=265&theme-id=light&default-tab=result"
      },
      {
        id: 14,
        url:
          "https://codesandbox.io/embed/vanilla-javascript-todo-app-lv718?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      },
      {
        id: 15,
        url:
          "https://codesandbox.io/embed/carousel-with-image-uploader-kdk1u?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      },
      {
        id: 16,
        url:
          "https://codesandbox.io/embed/timer-o4zgg?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      }
    ],
    resumeUrl:
      "https://drive.google.com/file/d/13KLTb702mi04T3mx6ICFCa24ax32rYQO/view?usp=sharing"
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
