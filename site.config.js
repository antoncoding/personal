const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Antón 安冬",
    image: "/me.jpeg",
    role: "solidity developer",
    bio: "Average IQ solidity dev",
    email: "",
    linkedin: "anton-cheng-47b01010b",
    github: "antoncoding",
    instagram: "",
  },
  projects: [
    {
      name: `Grappa Finance`,
      href: "https://github.com/grappafinance",
    },
  ],
  // blog setting (required)
  blog: {
    title: "安安冬冬",
    description: "生活與學習筆記",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: "2023", // If leave this empty, current year will be used.
  lang: "zh-TW", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["solidity", "defi", "options", "gas optimization"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "antoncoding/personal",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }