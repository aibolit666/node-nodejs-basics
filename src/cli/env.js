import { env } from 'process';

const parseEnv = () => {

    let endString = ''
    const prefix = /^RSS_/;

    for (const [key, value] of Object.entries(env)) {
        if (prefix.test(key)) {
            endString += `${key}=${value} `
        }
    }

    console.log(endString.trim().split(' ').join('; '));
};

parseEnv();