const { range, map } = require('@laufire/utils/collection');
const { rndString } = require('@laufire/utils/random');

const main = (rec, col) => {
    const start = '{';
    const end = '}';
    const cols = [];
    for(let k = 0; k < col - 1; k++){
        cols[k] = rndString();
    }
    
    for(let i = 0; i < rec; i++){
        let body = '';
        let j = 0;
        while(j < col - 1){
            body += `"${cols[j]}": "${rndString()}",`;
            j++;
        };
        body += `"${cols[j - 1]}": "${rndString()}"`;
        console.log(start + body + end);
    };
};

main(process.argv[2] || 10, process.argv[3] || 10);

module.exports = main;