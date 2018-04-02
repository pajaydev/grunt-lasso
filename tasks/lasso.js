let lasso = require('lasso');
let fs = require('fs');
module.exports = (grunt) => {
    grunt.registerMultiTask("lasso", "Run lasso through grunt", function () {
        let grunttask = this;
        let theLasso = lasso.create(config, process.cwd());
        let name = grunttask.data.name || 'default';
        let dependencies =
            grunt.task.run();
    });

};