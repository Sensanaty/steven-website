# Steven de Graaf's Portfolio

This is the personal portfolio website of Steven de Graaf. You can view the live site at [REPLACE_WITH_URL]

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
    
- *Plugins*
    - `clean-webpack-plugin`
    - `copy-webpack-plugin`
    - `html-webpack-plugin`
    - `mini-css-extract-plugin`
    - `optimize-css-assets-webpack-plugin`
    - `terser-webpack-plugin`

## Specifications

All source files are located in the `src/` directory. Production files go under the `dist/` once the build process is completed, and the master is pushed onto [Netlify](https://www.netlify.com) automaticatly. Avoid updating the master branch unless changes are complete, because the branch is being monitored and auto-pushed to production.

The website uses Webpack 4 during production, with the [above](#stack) specified modules and plugins for it.

## Development

To start working on the site, clone it and run `yarn install` to install dependencies. Run `yarn start` to run the Webpack webserver, which features Module hotswaps and Live browser reloads. Create a feature branch, and only merge branches into `master` if the changes are definite, as the `master` branch is monitored and auto-pushed to production.

Netlify uses the `yarn build` command to build from source, and these files go into the `dist/` directory, which is `.gitignore`'d. You may also run `yarn build` to see the production build locally, but these are untracked by Git.