import { cp } from 'fs'

const copy = async () => {

    cp('src/fs/files/', 'src/fs/files-copy/', { recursive: true }, (error) => {
        if (error) {
            console.log("FS operation failed");
        }
    })

}

copy();