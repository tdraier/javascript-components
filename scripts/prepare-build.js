import path from 'path';
import fs from 'fs';
import glob from 'glob';

function mkdirs(dir) {
    if (!fs.existsSync(dir)) {
        let parent = path.resolve(dir,'..');
        mkdirs(parent);
        fs.mkdirSync(dir);
    }
}

function copyFile(base, file) {
    let source = path.resolve(path.resolve("./"), base, file);
    let target = path.resolve(path.resolve("./"), 'build', file);
    mkdirs(path.resolve(target,'..'));
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
    console.log(`Copied ${source} to ${target}`);
}

function typescriptCopy() {
    let from = "src";
    const indexes = glob.sync('**/index.js', { cwd: from });
    indexes.forEach(file => {
        let source = path.resolve(path.resolve("./"), from, file);
        let target = path.resolve(path.resolve("./"), 'build', file.slice(0,-3) + ".d.ts");
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
        let target_es = path.resolve(path.resolve("./"), 'build', file.slice(0,-3) + ".es.js");
        fs.createReadStream(source).pipe(fs.createWriteStream(target_es));
        console.log(`Copied ${source} to ${target_es}`);
    });

    const files = glob.sync('**/*.d.ts', { cwd: from });
    files.forEach(file => copyFile("src", file));

    const jsons = glob.sync('**/*.json', { cwd: from });
    jsons.forEach(file => copyFile("src", file));

    const woff = glob.sync('**/*.wof*', { cwd: from });
    woff.forEach(file => copyFile("src", file));
}

copyFile(".","package.json");
typescriptCopy();
