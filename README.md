# grunt-lasso

Grunt plugin for lasso js.

[![npm version](https://badge.fury.io/js/grunt-lasso.svg)](https://badge.fury.io/js/grunt-lasso)


# Installing grunt and grunt-lasso 

```shell
npm install --save-dev grunt
npm install --save-dev grunt-lasso
```

## Usage:

```javascript

grunt // to clean and check jshint
grunt lasso // bundles and injects it in to html.

```

## Default lasso config:

```javascript
           config: {
                'plugins': [
                   // you can provide array of plugins
                ],
                // Optional URL prefix to prepend to relative bundle paths like http://mycdn/build
                'urlPrefix': '/build',
                'outputDir': path.join(__dirname, 'build'),
                'fingerprintsEnabled': true,
                 // If "minify" is set to true then output CSS and JavaScript will run
                // through a minification transform. (defaults to false)
                'minify': false,
                // If "resolveCssUrls" is set to true then URLs found in CSS files will be
                 // resolved and the original URLs will be replaced with the resolved URLs.
                // (defaults to true)
                'resolveCssUrls': true,
                 // If "bundlingEnabled" is set to true then dependencies will be concatenated
                // together into one or more bundles. If set to false then each dependency
                 // will be written to a separate file. (defaults to true)
                'bundlingEnabled': true,
                // Set of dependencies to add to the bundle
                'dependencies':[
                    "./src/css/style.css",
                     "./src/js/index.js",
                     "./src/component/app.js",
                     "require-run: ./src/js/main"
                 ],
                 // js and css bundled file will be inserted inside this html
                 'targetHTML':'./src/index.html'
                 }
```

You can provide lasso.config file to replace the default config.