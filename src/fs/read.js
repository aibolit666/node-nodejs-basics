import fs from 'node:fs'

const read = async () => {

    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (error, data) => {
        if (error) {
            console.error("FS operation failed");
            return
        }
        console.log(data);
    });

};

await read();