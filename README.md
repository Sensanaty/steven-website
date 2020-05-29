[![Netlify Status](https://api.netlify.com/api/v1/badges/8141745e-1d5a-4de4-9964-0a35fd2bb085/deploy-status)](https://app.netlify.com/sites/stevendegraaf/deploys)

# Steven de Graaf's Portfolio

This is the personal portfolio website of Steven de Graaf. You can view the live site at [stevendegraaf.com](https://stevendegraaf.com).

## Specifications

All source files files are located in the `src/` directory. The various pages of the site, located under `src/pages/` are generated through HTML templates using `HtmlWebpackPlugin`. All images and similar assets are imported in `src/index.js`, and will then be included in the build process. The CSS is compiled from SCSS located under `src/styles`.

Running the build command locally will generate an optimized version of the website, however this directory is ignored by Git.

The website utilizes Webpack 4, with the [below](#stack) specified modules and plugins for it.

## Development

To start working on the site, clone it and run `yarn install` to install dependencies. Run `yarn start` to run the Webpack webserver on port `8080`, which features module hotswaps and live browser reloads.

`yarn build` will build the source files and put them in the `dist/` folder, which is ignored by Git.

The website is hosted on Netlify, and it monitors the `production` branch. *Any* changes to the production branch will make Netlify run the `yarn build` command automatically, so the optimum workflow is to work on feature branches, merge them into `master`, and then once the changes are finalized to push them onto `production`. Netlify will handle the rest and it usually doesn't take more than a few minutes for the live site to get updated with the new changes.

## Stack

- *Webpack 4*
    - `webpack`
    - `webpack-cli`
    - `webpack-dev-server`
    - `webpack-merge`
    - `cross-env`
    
- *Babel*
    - `@babel/core`
    - `@babel/plugin-proposal-class-properties`
    - `@babel/preset-env`
    - `babel-eslint`
    
- *Loaders*
    - `babel-loader`
    - `sass-loader`
    - `node-sass`
    - `postcss-loader`
    - `cssnano`
    - `postcss-preset-env`
    - `css-loader`
    - `style-loader`
    - `eslint-loader`
    - `file-loader`
    - `url-loader`
    - `raw-loader`
    
- *Plugins*
    - `clean-webpack-plugin`
    - `copy-webpack-plugin`
    - `html-webpack-plugin`
    - `mini-css-extract-plugin`
    - `optimize-css-assets-webpack-plugin`
    - `terser-webpack-plugin`
