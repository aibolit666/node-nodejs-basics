import { cp } from 'fs'

const copy = async () => {

    cp('src/fs/files/', 'src/fs/files-copy/', { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }
    })

}

copy();