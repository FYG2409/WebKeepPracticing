var dueloJ = new Duelo();
dueloJ.inicio();

var btnTengoCodigo = document.getElementById("btnTengoCodigo");
var btnCreaCodigo = document.getElementById("btnCreaCodigo");

btnTengoCodigo.addEventListener("click", function(){
    dueloJ.metTengoCodigo();
});

btnCreaCodigo.addEventListener("click", function(){
    dueloJ.metCreaCodigo();
});


function mandaCreacionAleatorio(){
    dueloJ.numAleatorio();
}

function ffm(){
    dueloJ.ff();
}

function mandaCodPerDos(codigoIngresado){
    dueloJ.validandoCodigoPerDos(codigoIngresado);
}
function iniciaDos(codigoIngresadoTxt){
    dueloJ.iniciaDueloPerDos(codigoIngresadoTxt);
}
function reiVistas(){
    dueloJ.reiniciaVistas();
}

function traePer(manda){
    dueloJ.pp(manda);
}

function iio(duelo, codigoIngresadoTxt){
    dueloJ.ii(duelo, codigoIngresadoTxt);
}

function mas(existe, materia, numHijos){
    dueloJ.mm(existe, materia, numHijos);
}