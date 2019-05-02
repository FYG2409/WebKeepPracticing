var objeto= new principalUsrControl();

var btnDuelo = document.getElementById("btnDuelo");

//----------BOTONES DE LAS MATERIAS----------
var infinito = document.getElementById("infinito");
var razMatematico = document.getElementById("razMatematico");
var fisica = document.getElementById("fisica");
var algebra = document.getElementById("algebra");
var geoTrigo = document.getElementById("geoTrigo");
var geoAnalitica = document.getElementById("geoAnalitica");
var calDifIntegral = document.getElementById("calDifIntegral");
var probaEstadistica = document.getElementById("probaEstadistica");
var prodEscrita = document.getElementById("prodEscrita");
var compreTextos = document.getElementById("compreTextos");
var biologia = document.getElementById("biologia");
var quimica = document.getElementById("quimica");
//--------------------------------------------


btnDuelo.addEventListener("click", function(){
    window.location.href = "duelo.html";
});

//BOTONES DE LAS MATERIAS
infinito.addEventListener("click", function(){
    objeto.validaInfinito("todas");
});

razMatematico.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Razonamiento Matematico");
});

fisica.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Fisica");
});

algebra.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Algebra");
});
    
geoTrigo.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Geometria y Trigonometria");
});
    
geoAnalitica.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Geometria Analitica");
});
    
calDifIntegral.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Calculo Diferencial e Integral");
});
    
probaEstadistica.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Probabilidad y Estadistica");
});
    
prodEscrita.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Produccion Escrita");
});
    
compreTextos.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Comprension de Textos");
});
    
biologia.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Biologia");
});
    
    
quimica.addEventListener("click", function(){
    objeto.validaExistenPreguntas("Quimica");
});
    
    
    
function mas(existe, numHijos){
    objeto.mm(existe, numHijos);
}