/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This is to ensure that the code within this block only runs when building the client-side bundle.
      // Exclude the Widget component from the main bundle and create a separate chunk
      config.optimization.splitChunks.cacheGroups.Chart = {
        test: /[\\/]MyLineChart\.tsx$/,
        name: 'mychart',
        chunks: 'all',
      };
    }

    return config;
  },
};
