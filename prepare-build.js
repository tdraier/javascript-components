import path from 'path';
import fs from 'fs';
import glob from 'glob';

function copyFile(base, file) {
    let source = path.resolve(__dirname, base, file);
    let target = path.resolve(__dirname, 'build', file);
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
    console.log(`Copied ${source} to ${target}`);
}

function i18nCopy() {
    let from = "src/main/resources/javascript";
    if (!fs.existsSync('build/locales')){
        fs.mkdirSync('build/locales');
    }
    const json = glob.sync('locales/*.json', { cwd: from });
    json.forEach(file => copyFile(from, file));
}

function typescriptCopy() {
    let from = "src/javascript";
    const indexes = glob.sync('**/index.js', { cwd: from });
    indexes.forEach(file => {
        let source = path.resolve(__dirname, from, file);
        let target = path.resolve(__dirname, 'build', file.slice(0,-3) + ".d.ts");
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
    });

    const files = glob.sync('**/*.d.ts', { cwd: from });
    files.forEach(file => copyFile("src/javascript", file));

    const jsons = glob.sync('**/*.json', { cwd: from });
    jsons.forEach(file => copyFile("src/javascript", file));
}

copyFile(".","package.json");
typescriptCopy();
i18nCopy();
