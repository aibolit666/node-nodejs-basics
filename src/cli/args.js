import { argv } from 'process'

const parseArgs = () => {

    let endString = []

    for (let j = 2; j < argv.length; j++) {
        endString.push(`${argv[j]} is ${argv[j + 1]}`);
        j++
    }

    console.log(endString.join().split(',').join(', '));
};

parseArgs();