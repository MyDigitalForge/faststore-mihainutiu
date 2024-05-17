
module.exports = {
  seo: {
  "title": "Mihai Nutiu FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "Mihai Nutiu's | FastStore",
  "author": "Mihai Nutiu"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "mihainutiu",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "RON",
      symbol: "lei",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "ROU",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://mihainutiu.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/computer%20&%20software",
    search: "/s?q=Brand",
    pdp: "/test-affiliat-0404/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/test-affiliat-0404/p",
      collection: "/computer%20&%20software",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/test-affiliat-0404/p",
      collection: "/computer%20&%20software",
      collection_filtered: "/computer%20&%20software/?category-1=computer%20&%20software&brand=Brand&facets=category-1%2Cbrand%27",
      search: "/s?q=Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://mihainutiu.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
