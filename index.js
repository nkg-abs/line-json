const { rndString } = require('@laufire/utils/random');

const main = (keysLength) => {
    console.log('{')
    for(let i = 0; i < keysLength - 1; i++){
        console.log(`"${rndString()}": "${rndString()}",`)
    }
    console.log(`"${rndString()}": "${rndString()}"`)
    console.log('}');
};

main(process.argv[2]);