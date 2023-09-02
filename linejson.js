const { rndString } = require('@laufire/utils/random');

const main = (keysLength) => {
    const rows = Math.floor(Math.sqrt(keysLength));
    const start = '{';
    const end = '}';
    for(let i = 0; i < rows; i++){
        let body = '';
        for(let j = 0; j < rows - 1; j++){
            body += `"${rndString()}": "${rndString()}",`;
        };
        body += `"${rndString()}": "${rndString()}"`;
        console.log(start + body + end);
    };
};

main(process.argv[2] || 4);