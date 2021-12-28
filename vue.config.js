module.exports = {
  pages: {
    home: {
      entry: "src/pages/Home/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    test: {
      entry: "src/pages/Test/main.js",
      template: "public/index.html",
      filename: "test/index.html",
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["postcss-loader"],
        },
      ],
    },
  },
};
