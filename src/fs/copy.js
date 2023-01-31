import fs from 'node:fs'

const copy = async () => {

    fs.cp('src/fs/files/', 'src/fs/files-copy/', { recursive: true }, (error) => {
        if (error) {
            console.error("FS operation failed");
        }
    })

}

copy();