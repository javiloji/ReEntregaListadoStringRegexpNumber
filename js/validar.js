/**
 * 
 * Listado String, regexp y number
 * 
 * @author Javier Lopera Jiménez
 * 
 */

 validar = (function(){

    let expresiones = {
        capitaliza: [new RegExp(""),"Error"]
    }

    let capitaliza = function (cadena){

        let cadenaResultado;
        let arrayCadenas = cadena.split(" ");

        for (let index = 0; index < arrayCadenas.length; index++) {
            
            arrayCadenas[i].substring(0,1).toUpperCase();
            cadenaResultado += arrayCadenas[i];    
        }

        return cadenaResultado;
    }


    return {
        capitaliza: capitaliza
    }

 })();