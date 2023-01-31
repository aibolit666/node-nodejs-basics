import fs from 'node:fs'

const rename = async () => {

    fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (error) => {
        if (error) {
            console.log("FS operation failed");
        }
    })

};

await rename();