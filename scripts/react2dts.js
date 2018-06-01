import fs from 'fs';
import {generateFromFile} from 'react-to-typescript-definitions';

function dtsGen(source) {
    let target = source.slice(0,-4) + ".d.ts";
    fs.writeFileSync(target, generateFromFile(null, source));
    console.log(`Generated ${target}`);
}

dtsGen(process.argv[2]);