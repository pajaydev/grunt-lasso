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

grunt lasso // bundles and injects it in to html.

```

## Default lasso config:

Provide targetHTML and dependecies in lassoOptions and provide lasso config details in Config as mentioned below.

```javascript
           lasso: {

            lassoOptions: {
                 // js and css bundled file will be inserted inside this html
                "srcHTML": path.join(__dirname, 'src/index.html'),
                // Set of dependencies to add to the bundle
                "dependencies": [
                    "./src/app.js",
                    "./src/app.less",
                ],
            },

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
                'bundlingEnabled': true
                 }
           }
```

## Sample GruntFile.js to be included.

```javascript
module.exports = function (grunt) {
    const path = require('path');
    grunt.initConfig({
        lasso: {
            lassoOptions: {
                "srcHTML": path.join(__dirname, 'src/index.html'),
                "dependencies": [
                    "./src/main.js",
                    ".src/style.less"
                ],
            },

            config: {
                'plugins': [
                    'lasso-less'
                ],
                'urlPrefix': '/build',
                'outputDir': path.join(__dirname, 'build'),
                'fingerprintsEnabled': true,
                'minify': false,
                'resolveCssUrls': true,
                'bundlingEnabled': true
            }
        }
    })

    // load the tasks
    grunt.loadNpmTasks('grunt-lasso');
};

```