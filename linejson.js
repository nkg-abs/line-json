const { rndBetween } = require('@laufire/utils/lib');
const { rndString } = require('@laufire/utils/random');

const col = {
    object: {
        shell: ['{', '}'],
        valueTypes: {
            string: (key) => `"${key}": "${rndString()}"`,
            number: () => rndBetween(100000000, 999999999), 
        },
        keyTypes: {
            number: 60,
            random: 44,
        },
    },
    array: {
        shell:  ['[', ']'],
        valueTypes: {
            string: () => `"${rndString()}"`,
            number: () => rndBetween(100000000, 999999999), 
        },
        keyTypes: {
            number: 95,
        },
    },
};

const main = (rec, size, type, key, valueType = 'string') => {
    const { shell, getBody, keyTypes, valueTypes } = col[type];
    const getValue = valueTypes[valueType];
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
            body += getValue(colName[j])+',';
            j++;
        };
        body += getValue(colName[j]);
        console.log(start+body+end);
    };
};

const [,,...rest] = process.argv;
main(...rest);

module.exports = main;