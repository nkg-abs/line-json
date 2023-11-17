const { map, range, reduce } = require("@laufire/utils/collection");
const axios = require("axios");

const main = async () => {
  const multipler = 1;
  console.time("fetch");

  const temp = await Promise.all(
    map(range(0, multipler), async () => {
      const r = await axios("http://192.168.1.6:8080/data300MB.json");

      return r;
    }),
  );

  console.timeEnd("fetch");

  console.log(Object.keys(temp));

};

main();
