const fs = require ("fs");

const pathHotToys = __dirname + "/datos/figuras1.json";
const pathBandai = __dirname + "/datos/figuras2.json";
const pathStarWars = __dirname + "/datos/figuras3.json";

function importar(marcaFiguras){

    switch (marcaFiguras.toLowerCase()) {
        case "hot toys":
            json = fs.readFileSync(pathHotToys,"utf-8");
            arrayHotToys = JSON.parse(json);
            return arrayHotToys;  
            break;
        case "bandai":
            json = fs.readFileSync(pathBandai,"utf-8");
            arrayBandai = JSON.parse(json);
            return arrayBandai;
            break;
        case "star wars":
            json = fs.readFileSync(pathStarWars,"utf-8");
            arrayStarWars = JSON.parse(json);
            return arrayStarWars;
            break;
        default:
            return `
        La marca de figuras no existe o fue mal escrita, por favor intenta nuevamente...`;
            break;
    }
};

module.exports = importar;

//console.log(importar("hotToys"));