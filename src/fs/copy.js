import fs from 'node:fs'

const copy = async () => {

    fs.cp('src/fs/files/', 'src/fs/files-copy/', { recursive: true }, (error) => {
        if (error) {
            console.log("FS operation failed");
        }
    })

}

copy();