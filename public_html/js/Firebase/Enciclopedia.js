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
                var datoa = dato.val();
                filasAMostrar+= 
                        "<form method='post' action='Ver_Articulo.jsp'>" +
                        "<table>"+
                        "<tr>"+
                                "<td>"+ "<input name='Mate' type='text' size= '20' style = 'background-color: #fffff; border: 0;' readonly value='"+ datoa.materia +"'>"+"</td>"+
                                "<td>"+ "<input name='Tema' type='text' size= '20' style = 'background-color: #fffff; border: 0;' readonly value='"+ datoa.tema +"'>" + "</td>"+
                                "<td>"+ "<input name='Desc' type='text' size= '1' style = 'visibility:hidden' readonly value='"+datoa.descripcion+"'>" + 
                                        "<input name='Ejem' type='text' size= '1' style = 'visibility:hidden' readonly value='"+datoa.ejemplo+"'>" +
                                        "<br><center><input type='submit' value='Ver'><center><br>" +
                                "</td>"+
                        "</tr>"
                        + "</table>" + "</form>";
                        
            }
                
        );
        //for(var key in datos)
        //{
          //  filasAMostrar+="<tr>"+
             //                   "<td>"+ datos[key].materia +"</td>"+
               //                 "<td>"+ datos[key].tema +"</td>"+
                 //               "<td>"+ datos[key].descripcion +"</td>"+
                   //             "<td>"+ datos[key].ejemplo +"</td>"+
                     //      "</tr>";
        //}
        tBodyEnci.innerHTML = filasAMostrar;
    });
}
/*
 * "<td>"+ datos[key].materia +"</td>"+
                                "<td>"+ datos[key].tema +"</td>"+
                                "<td>"+ datos[key].descripcion +"</td>"+
                                "<td>"+ datos[key].ejemplo +"</td>"+
 */