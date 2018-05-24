import path from 'path';
import fs from 'fs';
import glob from 'glob';

function copyFile(base, file) {
    let source = path.resolve(__dirname, base, file);
    let target = path.resolve(__dirname, 'build', file);
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
    console.log(`Copied ${source} to ${target}`);
}

function typescriptCopy(from) {
    const indexes = glob.sync('**/index.js', { cwd: from });
    indexes.forEach(file => {
        let source = path.resolve(__dirname, from, file);
        let target = path.resolve(__dirname, 'build', file.slice(0,-3) + ".d.ts");
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
    });

    const files = glob.sync('**/*.d.ts', { cwd: from });
    files.forEach(file => copyFile("src/javascript", file));
}

copyFile(".","package.json");
typescriptCopy("src/javascript");
