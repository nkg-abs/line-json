const { rndString } = require('@laufire/utils/random');

const col = {
    object: {
        shell: ['{', '}'],
        getBody: (key) => `"${key}": "${rndString()}"`,
        keyTypes: {
            number: 60,
            random: 44,
        },
    },
    array: {
        shell:  ['[', ']'],
        getBody: () => `"${rndString()}"`,
        keyTypes: {
            number: 95,
        },
    },
};

const main = (rec, size, type, key) => {
    const { shell, getBody, keyTypes } = col[type];
    const cols = keyTypes[key] * size;
    const [start, end] = shell;
    const colName = [];
    for(let k = 0; k < cols; k++){
        colName[k] = key === 'number' ? k : rndString();
    }
    
    for(let i = 0; i < rec; i++){
        let body = '';
        let j = 0;
        while(j < cols - 1){
            body += getBody(colName[j])+',';
            j++;
        };
        body += getBody(colName[j]);
        console.log(start + body + end);
    };
};

const [,,...rest] = process.argv;
main(...rest);

module.exports = main;