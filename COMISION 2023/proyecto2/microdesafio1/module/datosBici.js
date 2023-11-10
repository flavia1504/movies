const fs = require  ('fs');
let path = __dirname + "/bicicletas.json";

function importarArchivo() { 
const json = fs.readFileSync(path,"utf-8");
const array = JSON.parse(json)
return array;
}

const arrayBicicletas = importarArchivo();
module.exports = arrayBicicletas;

console.log(arrayBicicletas);