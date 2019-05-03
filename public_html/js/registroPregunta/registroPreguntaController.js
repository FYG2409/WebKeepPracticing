var registroPreg = new Registropreg();
registroPreg.escuchaImagenes();

var btnRegistra = document.getElementById("btnRegistra");

btnRegistra.addEventListener("click", function(){
    registroPreg.guardaPregunta();
});

function cambiando(img, e){
    registroPreg.cambiandoi(img, e);
}

function completaSub(nombre,tipo){
    registroPreg.completaSubidaImg(nombre,tipo);
}