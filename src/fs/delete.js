import fs from 'node:fs'

const remove = async () => {

    fs.unlink('src/fs/files/fileToRemove.txt', (error) => {
        if (error) {
            console.error("FS operation failed");
        }
    })

};

await remove();