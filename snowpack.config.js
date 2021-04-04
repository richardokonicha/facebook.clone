module.exports = {
  extends: "@snowpack/app-scripts-react",
  mount: {
    public: { url: "/" },
    src: { url: "/src" },
  },
  devOptions: {
    port: 3000,
    // src: '/src',
    bundle: false,
    routes: "public/index.html",
  },
  packageOptions: {},
};
