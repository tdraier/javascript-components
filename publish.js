var yarn = require('yarn-api');
var versions = process.env.projectVersion.split(/\.|-/)
var build = versions[0] + "." +  versions[1] + "." +  versions[2];

if (versions.indexOf("SNAPSHOT") > -1) {
    build += "-beta" + process.env.buildNumber;
}

yarn(['publish', 'build', '--no-git-tag-version', '--new-version', build], function (err) {
    if (err) console.error(err);
});
