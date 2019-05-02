var pregunta = new Pregunta();
pregunta.inicio();

var siguiente = document.getElementById("siguiente");
var salir = document.getElementById("salir");
var resA = document.getElementById("resA");
var resB = document.getElementById("resB");
var resC = document.getElementById("resC");
var resD = document.getElementById("resD");

siguiente.addEventListener("click", function(){
    pregunta.clickeoSiguiente();
});

salir.addEventListener("click", function(){
    pregunta.salir();
    window.location.href = "index.html";
});

resA.addEventListener("click", function(){
    pregunta.clickeo("A");
});

resB.addEventListener("click", function(){
    pregunta.clickeo("B");
});

resC.addEventListener("click", function(){
    pregunta.clickeo("C");
});

resD.addEventListener("click", function(){
    pregunta.clickeo("D");
});

function dat(obj){
    pregunta.gPreg(obj);
}

function abandono(){
    pregunta.abandonoD();
}

function ganador(){
    pregunta.verGanador();
}

function traePer(manda){
    pregunta.pp(manda);
}

function vali(snapshot){
    pregunta.val(snapshot);
}