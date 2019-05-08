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

function EnciMenu()
{
    var tEnciM=document.getElementById("enciM");
    var id=new Array();
    var tema=new Array();
    var materia=new Array();
    var descrip=new Array();
    var ejemplo=new Array();
    var reference= firebase.database().ref("Enciclopedia");
    reference.on("value",function(snap)
    {
        if(snap.exists())
        {
            var datos=snap.val();
            var filasAMostra="";

            snap.forEach
            (
               (dato)=>
                {
                    var ID= dato.key;
                    var datoa = dato.val();
                    id.push(ID);
                    tema.push(datoa.tema);
                    materia.push(datoa.materia);
                    descrip.push(datoa.descripcion);
                    ejemplo.push(datoa.ejemplo);         
                }
            );
            var m=id.length;
            var N=getRandomInt(m);
            
            filasAMostra+="<p>"+tema[N]+"</p>" +
                          "<p>"+materia[N]+"</p>" +
                          "<p>"+descrip[N]+"</p>" +
                          "<p>"+ejemplo[N]+"</p>" ;
                    
           tEnciM.innerHTML = filasAMostra;  
        } 
    });
    
}
function getRandomInt(tot) {
  return Math.floor(Math.random() * (tot));
}