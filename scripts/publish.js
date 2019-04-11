var path = require('path');
var yarn = require('yarn-api');

//var versions = process.env.projectVersion.split(/\.|-/)
//var build = versions[0] + "." +  versions[1] + "." +  versions[2];

var json = require(path.resolve("./package.json"));
var build = json.version;

build += '-featureBACKLOG9621.' + (new Date()).toISOString().slice(0,19).replace(/[-:T]/g,"");

//if (versions.indexOf("SNAPSHOT") > -1) {
//    build += "-beta" + process.env.buildNumber;
//}

yarn(['publish', 'build', '--no-git-tag-version', '--tag', 'featureBACKLOG9621', '--new-version', build], function (err) {
    if (err) console.error(err);
});
