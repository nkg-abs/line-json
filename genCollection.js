const { rndString } = require("@laufire/utils/random");

const keys= {
    random: () => rndString(),
    number: (i) => i,
}

const types = {
    object: {},
    array: [],
}

const genCollection = (keysLength, type) => {
    const shell = types[type];
    for (let i = 0; i < keysLength; i++) {
        shell[i] = rndString();
    }
    return shell;
};

const gen2DCollection = () => {
    let data = {};
    for(let i = 0; i < 1000; i ++){
        let value = {};
        for(let j = 0; j < 1000; j++){
            value[rndString()] = rndString();
        }
        data[rndString()] = value;
    }

    return data;
}

const genNdJSON = (keysLength, type) => {
    const rows = Math.floor(Math.sqrt(keysLength));
    for(let i = 0; i < rows; i++){
        let shell = {};
        for(let j = 0; j < rows; j++){
            shell[rndString()] = rndString();
        };
        console.log(shell)
    };
};

module.exports = { genCollection, genNdJSON, gen2DCollection };

