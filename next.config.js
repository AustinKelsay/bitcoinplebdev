const corsHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, HEAD, OPTIONS",
  },
];

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: ["source.unsplash.com"],
  },

  async headers() {
    return [
      {
        source: "/.well-known/:slug*",
        headers: [...corsHeaders],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/nostr.json",
        destination: "/api/nostr/nip05",
      },
    ];
  },
};
