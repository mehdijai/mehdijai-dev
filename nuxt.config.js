const hostPath = process.env.CLIENT_PATH || "https://mehdijai.pages.dev"

export default {
  target: "static",
  head: {
    title: "Mehdi Jai - Fullstack JS/PHP developer.",
    htmlAttrs: {
      lang: "en",
      prefix: "og:http://ogp.me/ns/article",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Mehdi Jai, VueJS Frontend web developer. I create SaaS, Web Applications and Desktop Application With PHP, JavaScript/TypeScript and VueJS.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        property: "og:site_name",
        content: "Mehdi Jai Dev",
      },
      {
        property: "twitter:site:id",
        content: "@jai_mehdi",
      },
      {
        property: "twitter:creator",
        content: "@jai_mehdi",
      },
      {
        property: "twitter:creator:id",
        content: "@jai_mehdi",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },

  css: ["~/assets/sass/main.sass"],

  plugins: [{ src: "~/plugins/mailer.js" }],

  components: true,

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
  ],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/markdownit",
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: hostPath + "/sitemap.xml",
  },

  sitemap: {
    hostname: hostPath,
    gzip: true,
    defaults: {
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date(),
    },
    routes: () => {
      const projects = require("./static/projects.json")
      return projects.map((p) => p.slug)
    },
  },

  publicRuntimeConfig: {
    mailchipApi: process.env.MAILCHIMP_API,
  },

  styleResources: {
    sass: ["./assets/sass/*.sass"],
  },

  build: {
    loaders: {
      sass: {
        implementation: require("sass"),
      },
    },
    transpile: ["gsap"],
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.video = ["src", "poster"]
      }
    },
  },
}
