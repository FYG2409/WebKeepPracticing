function Desplegar()
{   
    var tBodyEnci=document.getElementById("enci");
    var reference= firebase.database().ref("Enciclopedia");
    reference.on("value",function(snap)
    {
        var datos=snap.val();
        
        var filasAMostrar="";
        
        snap.forEach
        (
           (dato)=>
            {
                var ID= dato.key;
                var datoa = dato.val();
                filasAMostrar+= 
                        "<table>"+
                        "<tr>"+
                                "<td>"+ "<input name='Mate' type='text' size= '20' style = 'background-color: #fffff; border: 0;' readonly value='"+ datoa.materia +"'>"+"</td>"+
                                "<td>"+ "<input name='Tema' type='text' size= '20' style = 'background-color: #fffff; border: 0;' readonly value='"+ datoa.tema +"'>" + "</td>"+
                                "<td>"+ "<button value='"+ID+"' class='ID'>Leer Articulo</button><br>" +
                                "</td>"+
                        "</tr>"
                        + "</table>";
                        
            }
                
        );
        
        tBodyEnci.innerHTML = filasAMostrar;
        
        $(function() 
            {
                $(".ID").click(function() 
                {
                    Limpiar();
                    Ver_Art(this.value);
                }
            );


        }   ); 
        
    });
}



function Ver_Art(ID)
{
    var tBodyEnci=document.getElementById("desp");
    firebase.database().ref("Enciclopedia/" + ID).on("value", 
                function(querySnapshot) 
                {
                    var Art= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Mostrar;
                        Mostrar = "<p>"+Art.tema+"</p>" +
                                  "<p>"+Art.materia+"</p>" +
                                  "<p>"+Art.descripcion+"</p>" +
                                  "<p>"+Art.ejemplo+"</p>" ;
                        tBodyEnci.innerHTML = Mostrar;
                        
                    }
                    else
                    {
                        alert("HA HABIDO UN ERROR");
                    }
                }, 
                function (errorObject) 
                {
                    console.error(errorObject.code);
                });
    
}

function Limpiar()
{
    var Div = document.getElementById("desp");
    Div.innerHTML="";
}