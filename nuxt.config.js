const hostPath = process.env.CLIENT_PATH || "https://mehdijai-dev.herokuapp.com"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mehdi Jai - JavaScript Frontend developer.",
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
          "Mehdi Jai, JavaScript Frontend developer based in Morocco. I create SaaS, Web Applications and Desktop Application With JavaScript and VueJS.",
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/sass/main.sass"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
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

  styleResources: {
    sass: ["./assets/sass/*.sass"],
  },

  // serverMiddleware: [
  //   '~/app/contact'
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
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
