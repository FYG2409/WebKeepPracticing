function Spinner()
{
    var tBodyEnci=document.getElementById("Carre");
    var reference= firebase.database().ref("Carreras");
    reference.on("value",function(snap)
    {
        var datos=snap.val();
        var filasAMostrar="<option value='Seleccione una Opcion'>Seleccione una Opcion</option>";
        snap.forEach
        (
           (dato)=>
            {
                var datoa = dato.val();
                var opc = datoa.carrera;
                filasAMostrar+= "<option value='"+opc+"'>"+opc+"</option>";
            }
                
        );
         tBodyEnci.innerHTML = filasAMostrar;
    });
    
    
    var vocacional = ["CECyT 1", "CECyT 2", "CECyT 3", "CECyT 4", "CECyT 5", "CECyT 6", "CECyT 7", "CECyT 8", "CECyT 9",
                "CECyT 10", "CECyT 11", "CECyT 12", "CECyT 13", "CECyT 14", "CECyT 15", "CECyT 16", "CECyT 17", "CECyT 18", "CET","ENP1","ENP2"
                ,"ENP3","ENP4","ENP5","ENP6","ENP7","ENP8","ENP9","CCH Naucalpan","CCH Vallejo","CCH Azcapotzalco","CCH Oriente","CCH Sur","Otro"];
    
    var EscuelaA =document.getElementById("Esc");
    var Opc="<option value='Seleccione una Opcion'>Seleccione una Opcion</option>";
    for(var i= 0 ; i<vocacional.length ; i++)
    {
        Opc+= "<option value='"+vocacional[i]+"'>"+vocacional[i]+"</option>";
    }
    EscuelaA.innerHTML = Opc;
}
