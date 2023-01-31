import fs from 'node:fs'

const list = async () => {

    fs.readdir('src/fs/files/', (error, files) => {
        if (error) {
            console.error("FS operation failed");
            return
        }
        files.forEach(file => {
            console.log(file);
        });
    });

};

await list();