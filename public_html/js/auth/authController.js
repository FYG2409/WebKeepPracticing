var btnIniciaSesion = document.getElementById("btnIniciaSesion");
var btnCierraSesion = document.getElementById("btnCierraSesion");

if(!(btnIniciaSesion === null)){
    btnIniciaSesion.addEventListener("click", function(){
        var correo = document.getElementById("correo").value;
        var contra = document.getElementById("contra").value;
        if(correo === "" || contra === ""){
            alert("Llena todos los campos");
        }else{
            const auth = new Autenticacion();
            auth.iniciaSesion(correo, contra);
        }
    });
}

if(!(btnCierraSesion === null)){
    btnCierraSesion.addEventListener("click", function(){
        const auth = new Autenticacion();
        auth.cerrarSesion();
    });
}





