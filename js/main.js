/**
 * 
 * Listado String, regexp y number
 * 
 * @author Javier Lopera Jiménez
 * 
 */
{

    let inputFinaliza = document.getElementById("finaliza");
    let inputFinaliza2 = document.getElementById("finaliza2");
    let inputEmpieza = document.getElementById("empieza");
    let inputEmpieza2 = document.getElementById("empieza2");

    function capitaliza() {
        let cadenaResultado = "";
        let arrayCadenas = this.value.split(" ");

        for (let i = 0; i < arrayCadenas.length; i++) {

            letra = arrayCadenas[i].substring(0, 1).toUpperCase();
            palabra = letra + arrayCadenas[i].substring(1,arrayCadenas[i].length).toLowerCase();

            cadenaResultado += palabra + " ";
        }
        this.nextSibling.innerHTML = cadenaResultado;
    }

    function invierte(){
        let palabraInvertida ="";
        for (let i = 0; i < this.value.length; i++) {
            
            if(this.value[i] == this.value[i].toUpperCase()){
                palabraInvertida+=this.value[i].toLowerCase();
            }else{
                palabraInvertida+=this.value[i].toUpperCase();
            }
        }
        this.nextSibling.innerHTML = palabraInvertida;
    }

    function camelCase(){

        let arrayPalabras = this.value.split(" ");

        let cadenaFinal= "";

        for (let i = 0; i < arrayPalabras.length; i++) {
            letra = arrayPalabras[i].substring(0, 1).toUpperCase();
            palabra = letra + arrayPalabras[i].substring(1,arrayPalabras[i].length).toLowerCase();

            cadenaFinal += palabra;
        }
        this.nextSibling.innerHTML = cadenaFinal;
    }

    function sinCamelCase(){

        let cadenaFinal = "";

        for (let i = 0; i < this.value.length; i++) {    

            if(this.value[i] == this.value[i].toUpperCase()){
                cadenaFinal += " "+ this.value[i].toLowerCase();
            }
            else{
                cadenaFinal += this.value[i];
            }
        }
        this.nextSibling.innerHTML = cadenaFinal;

    }

    function finaliza (cadenaInicial, cadenaFinal){

        if(cadenaInicial.endsWith(cadenaFinal)){
            inputFinaliza2.nextSibling.innerHTML = "  True";
        }
        else{
            inputFinaliza2.nextSibling.innerHTML = "  False";
        }
    }

    function empieza (cadenaInicial, cadenaFinal){

        if(cadenaInicial.startsWith(cadenaFinal)){
            inputEmpieza2.nextSibling.innerHTML = "  True";
        }
        else{
            inputEmpieza2.nextSibling.innerHTML = "  False";
        }
    }

    function dni (){
        try {
            let expresion = new RegExp("^([0-9]{8})[- ]?([a-zA-Z])$");

            let cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKET";

            let [, dniNumero, dniLetra] = expresion.exec(this.value);

            if (dniLetra.toUpperCase() == cadenaLetras[parseInt(dniNumero) % 23]) {
                this.nextSibling.innerHTML = "";
            }
            else {
                this.nextSibling.innerHTML = "La letra introducida no es correcta";
            }
        } catch{
            this.nextSibling.innerHTML = "Formato de dni inválido, 'xxxxxxxxZ o xxxxxxxx-Z'";
        }
    }

    function matricula(){
        try {
            
            let expresion = new RegExp("^[0-9]{4}[- ]?[a-zA-Z]{3}$")

            if(expresion.test(this.value) 
            && !this.value.includes("ñ") && !this.value.includes("Ñ")
            && !this.value.includes("q") && !this.value.includes("Q")
            && !this.value.includes("a") && !this.value.includes("A")
            && !this.value.includes("e") && !this.value.includes("E")
            && !this.value.includes("i") && !this.value.includes("I")
            && !this.value.includes("o") && !this.value.includes("O")
            && !this.value.includes("u") && !this.value.includes("U")){

                this.nextSibling.innerHTML = "";

            }else{
                this.nextSibling.innerHTML = "Formato de matricula inválido, 'xxxxZZZ o xxxx-ZZZ'";
            }

        } catch{
            this.nextSibling.innerHTML = "Matricula inválida";
        }
    }
    
    function codigoPostal(){

        try {
            
            let expresion = new RegExp("^([0-9]{2})([0-9]{3})$")

            let [,provincia,barrio] = expresion.exec(this.value);

            if(expresion.test(this.value) && provincia>"00" && provincia<"53" && barrio!="000"){
                this.nextSibling.innerHTML = "";
            }else{
                this.nextSibling.innerHTML = "Código Postal no Válido";
            }

        } catch{
            this.nextSibling.innerHTML = "Formado de Código Postal inválido, 'xxxxx'";
        }
        
    }

    function direccionMac(){
            let expresion = new RegExp("^([0-9a-zA-Z]{2}[.:]?){5}[0-9a-zA-Z]{2}$")

            if(expresion.test(this.value)){
                this.nextSibling.innerHTML = "";
            }else{
                this.nextSibling.innerHTML = "Dirección Mac inCorrecta";
            }
    }

    function direccionIp(){
        try {
            let expresion = new RegExp("^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])[.]){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$");

            if(expresion.test(this.value)){
                this.nextSibling.innerHTML = "";
            }else{
                this.nextSibling.innerHTML = "Dirección Ip No Válida";
            }

        } catch{
            this.nextSibling.innerHTML = "Formato De dirección Ip Erróneo";
        }
    }

    let inicio = () => {

        
        document.getElementById("capitaliza").addEventListener("blur",capitaliza);

        document.getElementById("invierte").addEventListener("blur",invierte);

        document.getElementById("camelCase").addEventListener("blur",camelCase);

        document.getElementById("sinCamelCase").addEventListener("blur",sinCamelCase);

        inputFinaliza2.addEventListener("blur",function(){
            finaliza(inputFinaliza.value,inputFinaliza2.value);
        });

        inputEmpieza2.addEventListener("blur",function(){
            empieza(inputEmpieza.value,inputEmpieza2.value);
        });

        document.getElementById("dni").addEventListener("blur",dni);

        document.getElementById("matricula").addEventListener("blur",matricula);

        document.getElementById("codigoPostal").addEventListener("blur",codigoPostal);


        document.getElementById("direccionMac").addEventListener("blur",direccionMac);

        document.getElementById("direccionIp").addEventListener("blur",direccionIp);

    }
    document.addEventListener("DOMContentLoaded", inicio);
}
