let lasso = require('lasso');
let fs = require('fs');
let path = require('path');
module.exports = (grunt) => {
    grunt.registerMultiTask("lasso", "Run lasso through grunt", function () {
        let grunttask = this;
        let config = grunttask.data;
        let theLasso = lasso.create(config, process.cwd());
        let done = grunttask.async();

        let dependencies = config.dependencies || [];
        let name = config.name || "default";
        let options = {
            name: name,
            dependencies: dependencies
        }
        let targetHTML = config.targetHTML ? grunttask.targetHTML : null;
        targetHTML = "src/index.html";
        let html = null;
        if (targetHTML) {
            // read the html file
            html = fs.readFileSync(targetHTML, { encoding: 'utf8' });
        }

        var promise = theLasso.lassoPage(options)
            .then(function (lassoPageResult) {
                console.log('Successfully lassoed page !');
                targetHtml = injector.inject(html, lassoPageResult, injectOptions);
                fs.writeFileSync(target, html, { enconding: 'utf8' });
            })
            .catch(function (e) {
                console.error("Failed....." + e);

            });


        grunt.task.run();
    });

};