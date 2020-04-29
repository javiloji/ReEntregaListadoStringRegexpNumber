/**
 * 
 * Listado String, regexp y number
 * 
 * @author Javier Lopera Jiménez
 * 
 */
{
    let inicio = () => {

        let inputCapitaliza = document.getElementById("capitaliza");
        let inputInvierte = document.getElementById("invierte");
        let inputCamelCase = document.getElementById("camelCase");
        let inputSinCamelCase = document.getElementById("sinCamelCase");
        let inputFinaliza = document.getElementById("finaliza");
        let inputFinaliza2 = document.getElementById("finaliza2");
        let inputEmpieza = document.getElementById("empieza");
        let inputEmpieza2 = document.getElementById("empieza2");
        let inputDni = document.getElementById("dni");
        let inputMatricula = document.getElementById("matricula");
        let inputCodigoPostal = document.getElementById("codigoPostal");
        let inputDireccionMac = document.getElementById("direccionMac");
        let inputDireccionIp = document.getElementById("direccionIp");



        function capitaliza(cadena) {
            let cadenaResultado = "";
            let arrayCadenas = cadena.split(" ");

            for (let i = 0; i < arrayCadenas.length; i++) {

                letra = arrayCadenas[i].substring(0, 1).toUpperCase();
                console.log(letra);
                palabra = letra + arrayCadenas[i].substring(1,arrayCadenas[i].length).toLowerCase();

                cadenaResultado += palabra + " ";
            }
            inputCapitaliza.nextSibling.innerHTML = cadenaResultado;
        }

        function invierte(cadena){
            let palabraInvertida ="";
            for (let i = 0; i < cadena.length; i++) {
                
                if(cadena[i] == cadena[i].toUpperCase()){
                    palabraInvertida+=cadena[i].toLowerCase();
                }else{
                    palabraInvertida+=cadena[i].toUpperCase();
                }
            }
            inputInvierte.nextSibling.innerHTML = palabraInvertida;
        }

        function camelCase(cadena){

            let arrayPalabras = cadena.split(" ");

            let cadenaFinal= "";

            for (let i = 0; i < arrayPalabras.length; i++) {
                letra = arrayPalabras[i].substring(0, 1).toUpperCase();
                console.log(letra);
                palabra = letra + arrayPalabras[i].substring(1,arrayPalabras[i].length).toLowerCase();

                cadenaFinal += palabra;
            }
            inputCamelCase.nextSibling.innerHTML = cadenaFinal;
        }

        // function sinCamelCase(cadena){

        //     let arrayCadenas = cadena.split("A" || "B"|| "C"|| "D"|| "F");

        //     let cadenaFinal = "";

        //     for (let i = 0; i < arrayCadenas.length; i++) {
                
        //         cadenaFinal += "," + arrayCadenas[i];

        //     }
        //     inputSinCamelCase.nextSibling.innerHTML = cadenaFinal;

        // }

        function sinCamelCase(cadena){

            let arrayCadenas = cadena.split("A" || "B"|| "C"|| "D"|| "F");
            let cadenaFinal = "";

            for (let i = 0; i < cadena.length; i++) {    

                if(cadena[i] == cadena[i].toUpperCase()){
                    cadenaFinal += " "+ cadena[i].toLowerCase();
                }
                else{
                    cadenaFinal += cadena[i];
                }
            }
            inputSinCamelCase.nextSibling.innerHTML = cadenaFinal;

        }

        function finaliza (cadenaInicial, cadenaFinal){
            // let longitudCadenaFinal = cadenaFinal.length;

            let finalDeCadenaInicial = cadenaInicial.slice(cadenaInicial.length-cadenaFinal.length,cadenaInicial.length);

            if(finalDeCadenaInicial == cadenaFinal){
                inputFinaliza2.nextSibling.innerHTML = "  True";
            }
            else{
                inputFinaliza2.nextSibling.innerHTML = "  False";
            }
        }

        function empieza (cadenaInicial, cadenaFinal){
            // let longitudCadenaFinal = cadenaFinal.length;

            let inicioDeCadenaInicial = cadenaInicial.slice(0,cadenaFinal.length);

            if(inicioDeCadenaInicial == cadenaFinal){
                inputEmpieza2.nextSibling.innerHTML = "  True";
            }
            else{
                inputEmpieza2.nextSibling.innerHTML = "  False";
            }
        }

        function dni (cadena){
            try {
                let expresion = new RegExp("^([0-9]{8})[- ]?([a-zA-Z])$");

                let cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKET";

                let [, dniNumero, dniLetra] = expresion.exec(cadena);
    
                console.log(dniNumero);
                console.log(dniLetra);

                if (expresion.test(cadena.trim()) && (dniLetra.toUpperCase() == cadenaLetras[parseInt(dniNumero) % 23])) {
                    inputDni.nextSibling.style.color = "black";
                    inputDni.nextSibling.innerHTML = "Dni Correcto";
                }
                else {
                    inputDni.nextSibling.style.color = "red";
                    inputDni.nextSibling.innerHTML = "La letra introducida no es correcta";
                }
            } catch{
                inputDni.nextSibling.style.color = "red";
                inputDni.nextSibling.innerHTML = "Formato de dni inválido, 'xxxxxxxxZ o xxxxxxxx-Z'";
            }
        }

        function matricula(cadena){
            try {
                
                let expresion = new RegExp("^[0-9]{4}[-]?[a-zA-Z]{3}$")

                if(expresion.test(cadena.trim()) 
                && !cadena.includes("ñ") && !cadena.includes("Ñ")
                && !cadena.includes("q") && !cadena.includes("Q")
                && !cadena.includes("a") && !cadena.includes("A")
                && !cadena.includes("e") && !cadena.includes("E")
                && !cadena.includes("i") && !cadena.includes("I")
                && !cadena.includes("o") && !cadena.includes("O")
                && !cadena.includes("u") && !cadena.includes("U")){

                    inputMatricula.nextSibling.style.color = "black";
                    inputMatricula.nextSibling.innerHTML = "Matricula Correcta";

                }else{
                    inputMatricula.nextSibling.style.color = "red";
                    inputMatricula.nextSibling.innerHTML = "Formato de matricula inválido, 'xxxxZZZ o xxxx-ZZZ'";
                }

            } catch{
                inputMatricula.nextSibling.style.color = "red";
                inputMatricula.nextSibling.innerHTML = "Matricula inválida";
            }
        }
        
        function codigoPostal(cadena){

            try {
                
                let expresion = new RegExp("^([0-9]{2})([0-9]{3})$")

                let [,provincia,barrio] = expresion.exec(cadena);

                if(expresion.test(cadena.trim()) && provincia>"00" && provincia<"53" && barrio!="000"){
                    inputCodigoPostal.nextSibling.style.color = "black";
                    inputCodigoPostal.nextSibling.innerHTML = "Código Postal Correcto";
                }else{
                    inputCodigoPostal.nextSibling.style.color = "red";
                    inputCodigoPostal.nextSibling.innerHTML = "Código Postal no Válido";
                }


            } catch{
                inputCodigoPostal.nextSibling.style.color = "red";
                inputCodigoPostal.nextSibling.innerHTML = "Formado de Código Postal inválido, 'xxxxx'";
            }
            
        }

        function direccionMac(cadena){
            try {
                
                let expresion = new RegExp("^([0-9a-zA-Z]{2}[.:]?){5}[0-9a-zA-Z]{2}$")

                if(expresion.test(cadena.trim())){
                    inputDireccionMac.nextSibling.style.color = "black";
                    inputDireccionMac.nextSibling.innerHTML = "Dirección Mac Correcta";
                }else{
                    inputDireccionMac.nextSibling.style.color = "red";
                    inputDireccionMac.nextSibling.innerHTML = "Dirección Mac inCorrecta";
                }
            } catch{
                inputDireccionMac.nextSibling.style.color = "red";
                inputDireccionMac.nextSibling.innerHTML = "Dirección Mac gbgbgCorrecta";
            }
        }

        function direccionIp(cadena){
            try {
                
                let expresion = new RegExp("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$");

                let [, numero1, numero2, numero3, numero4] = expresion.exec(cadena);

                // if(numero1<10 && numero1>0 && numero1.includes("0")){
                //     cadena = cadena.replace(numero,numero.replace("0",""));
                // }

                if(expresion.test(cadena.trim()) && parseInt(numero1)<256 && parseInt(numero2)<"256" && parseInt(numero3)<"256" && parseInt(numero4)<"256"){
                    inputDireccionIp.nextSibling.style.color = "black";
                    inputDireccionIp.nextSibling.innerHTML = "Dirección Ip Correcta";
                }else{
                    inputDireccionIp.nextSibling.style.color = "red";
                    inputDireccionIp.nextSibling.innerHTML = "Dirección Ip No Válida";
                }

            } catch{
                inputDireccionIp.nextSibling.style.color = "red";
                inputDireccionIp.nextSibling.innerHTML = "Formato De dirección Ip Erróneo";
            }
        }

        arrayInputs = document.getElementsByTagName("input");

        
        inputCapitaliza.addEventListener("blur",function(){
            capitaliza(inputCapitaliza.value);
        });

        inputInvierte.addEventListener("blur",function(){
            invierte(inputInvierte.value);
        });

        inputCamelCase.addEventListener("blur",function(){
            camelCase(inputCamelCase.value);
        });

        inputSinCamelCase.addEventListener("blur",function(){
            sinCamelCase(inputSinCamelCase.value);
        });

        inputFinaliza2.addEventListener("blur",function(){
            finaliza(inputFinaliza.value,inputFinaliza2.value);
        });

        inputEmpieza2.addEventListener("blur",function(){
            empieza(inputEmpieza.value,inputEmpieza2.value);
        });

        inputDni.addEventListener("blur",function(){
            dni(inputDni.value);
        });

        inputMatricula.addEventListener("blur",function(){
            matricula(inputMatricula.value);
        });

        inputCodigoPostal.addEventListener("blur",function(){
            codigoPostal(inputCodigoPostal.value);
        });

        inputDireccionMac.addEventListener("blur",function(){
            direccionMac(inputDireccionMac.value);
        });

        inputDireccionIp.addEventListener("blur",function(){
            direccionIp(inputDireccionIp.value);
        });

    //     let i =0;
    //     for (const input of arrayInputs) {


    //         switch (input) {
    //             case 0:
    //                 alert("hoa");
    //                 input.addEventListener("blur",function(){
    //                     capitaliza(input.value);
    //                     alert("hoa");
    //                 });
                    
    //                 break;
            
    //             default:
    //                 break;
    //         }

            

    //         i++;
    //     }
    }
    document.addEventListener("DOMContentLoaded", inicio);
}
