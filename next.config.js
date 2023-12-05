/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This is to ensure that the code within this block only runs when building the client-side bundle.
      // Exclude the Widget component from the main bundle and create a separate chunk
      /*       config.optimization.splitChunks.cacheGroups.MyLineChart = {
        test: /[\\/]MyLineChart\.js$/,
        name: 'mychart',
        chunks: 'all',
      }; */
    }

    return config;
  },
};
