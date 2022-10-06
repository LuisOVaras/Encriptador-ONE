


function removerAcentos(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar(){

    var frase = removerAcentos(document.getElementById("entrada").value.toLowerCase());

    var txtEncriptado = frase.replace(/e/img,"enter");
    var txtEncriptado = txtEncriptado.replace(/i/img,"imes");
    var txtEncriptado = txtEncriptado.replace(/a/img,"ai");
    var txtEncriptado = txtEncriptado.replace(/o/img,"ober");
    var txtEncriptado = txtEncriptado.replace(/u/img,"ufat");

    document.getElementById("salida").innerHTML = txtEncriptado;

    document.getElementById("salida").style.height= "500px"

    document.getElementById("img-der").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

    var frase = removerAcentos(document.getElementById("entrada").value.toLowerCase());

    var txtEncriptado = frase.replace(/enter/img,"e");
    var txtEncriptado = txtEncriptado.replace(/imes/img,"i");
    var txtEncriptado = txtEncriptado.replace(/ai/img,"a");
    var txtEncriptado = txtEncriptado.replace(/ober/img,"o");
    var txtEncriptado = txtEncriptado.replace(/ufat/img,"u");

    document.getElementById("salida").innerHTML = txtEncriptado;

    document.getElementById("salida").style.height= "500px"

    document.getElementById("img-der").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 

}

function copiar(){

    var contenido = document.getElementById("salida");
    contenido.select();
    document.execCommand('cut')

    Swal.fire({
        title: 'Copiado',
        text: 'Se copio en tu portapapeles',
        icon: 'success',
        confirmButtonText: '<a class="oki" href="index.html">Ok</a> <style>.oki{text-decoration: none; color: white;}</style>'
      })
        

    document.getElementById("salida").style.height= "auto"

   // 

}