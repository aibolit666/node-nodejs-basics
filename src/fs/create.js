import { writeFile } from 'fs';

const create = async () => {

    writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
        if (error) {
            console.log("FS operation failed", error);
        }
    })

};

await create();