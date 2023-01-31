import fs from 'node:fs';

const create = async () => {

    fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
        if (error) {
            console.error("FS operation failed");
        }
    })

};

await create();