## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/ripper-/myDS.git
cd myDS
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run build` or `yarn run build`  builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` `yarn dev` launches a server, using [localhost:5000](http://localhost:5000).

`npm run watch` or `yarn run watch` will continually rebuild the application as your source files change.

## License

[MIT](LICENSE).
