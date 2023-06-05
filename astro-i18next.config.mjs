/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "cs", "es"],
  // load:['server' , 'client'],
  // showDefaultLocale: true,

  
  routes: {
    en: {
      about: "about",
      "contact-us": "contact-us",
    },
    cs: {
      about: "about",
      "contact-us": "contact-us",
    },
    es: {
      about: "about",
      "contact-us": "contact-us",
    },
  },
  // i18nextServer: {
  //   debug: true,
  // },
};