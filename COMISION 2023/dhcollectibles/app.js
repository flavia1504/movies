const importar = require("./collectibles.js");

const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");

const unifiedCollectibles = [...hotToys,...bandai,...starWars];

const collectibles = {
    figuras : unifiedCollectibles,

    listFigures : function(){
        this.figuras.forEach(element => {
        console.log(element);
        });
    },

    figuresByBrand : function(marca){
        let marcaElegida = this.figuras.filter(function(element){
            return element.marca == marca;
        });
        if (marcaElegida.length>0){
            return marcaElegida;
        } else {
            return `
        La marca de figuras no existe o fue mal escrita, por favor intenta nuevamente...`;
        };
    },



}

//collectibles.listFigures();
//console.log(collectibles.figuresByBrand("Hot Toys"));
//console.log(collectibles.figuresByBrand("Bandai"));
//console.log(collectibles.figuresByBrand("Star Wars"));