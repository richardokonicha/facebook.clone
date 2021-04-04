module.exports = {
    extends: '@snowpack/app-scripts-react',

    devOptions: {
        port: 3000,
        src: 'src',
        bundle: false,
        routes: "public/index.html",
    },

    packageOptions: {
        polyfillNode: true,
        rollup: {
            plugins: [require("rollup-plugin-node-polyfills")()],
          },
    },
    
    plugins: [
    [
        '@snowpack/plugin-build-script',
        { cmd: 'postcss $FILE', input: ['.css'], output: ['.css']}
    ]
    ],
    
}