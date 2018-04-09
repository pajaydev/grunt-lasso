const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const injector = require('../src/html-injector');
let targetPath = '';
let dependencies = [];
module.exports = (grunt) => {
    grunt.registerMultiTask("lasso", "Run lasso through grunt", function () {
        let grunttask = this;
        let config = grunttask.data;
        let done = grunttask.async();

        if (grunttask.target == "lassoOptions" && grunttask.data != null) {
            grunt.log.ok('lassoOptions......');
            targetPath = grunttask.data.srcHTML ? grunttask.data.srcHTML : '';
            dependencies = grunttask.data.dependencies ? grunttask.data.dependencies : [];
            done();
            grunt.task.run();
        } else {
            grunt.log.ok('config......');
            let theLasso = lasso.create(config, process.cwd());

            let name = config.name || "default";
            let options = {
                name: name,
                dependencies: dependencies
            }
            //let targetHTML = config.targetHTML ? grunttask.targetHTML : null;
            // targetHTML = path.resolve(__dirname,"src/index.html");

            let html = null;
            if (targetPath) {
                // read the html file
                try {
                    html = fs.readFileSync(targetPath, { encoding: 'utf8' });
                } catch (error) {
                    grunt.log.warn("No such file exist " + error);
                }
            }

            let injectOptions = {
                path: targetPath,
                outputDir: config.outputDir
            }
            let promise = theLasso.lassoPage(options)
                .then(function (lassoPageResult) {
                    grunt.log.ok('Successfully lassoed page !');
                    if (html) {
                        targetHtml = injector.inject(html, lassoPageResult, injectOptions);
                        grunt.log.ok('Injected into target HTML !');
                        fs.writeFileSync(targetPath, targetHtml, { enconding: 'utf8' });
                    } else {
                        grunt.log.warn('No target HTML found !');
                    }
                })
                .catch(function (e) {
                    grunt.log.error("Failed....." + e);

                });

        }
        grunt.task.run();
    });

};