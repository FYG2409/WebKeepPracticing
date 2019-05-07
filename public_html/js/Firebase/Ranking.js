var ID=new Array();
var ID2=new Array();
var IDt=new Array();
var ID2t=new Array();
var Nick=new Array();
var Nick2=new Array();
var Nickt=new Array();
var Nick2t=new Array();
var AcierPor= new Array();
var Pun=new Array();
var Pun2=new Array();
var Escuela=new Array();
var Ni="";
var Escu="";
var Id="";
var tBodyG=document.getElementById("ranG");
var tBodyE=document.getElementById("ranE");
var Num=0;
var Num2=0;
var Lugar=0;
var Lugar2=0;
var Lugart;
var Lugar2t;
var RankEscolar="";
var RankGlobal="";
function NickEsc()
{
   firebase.auth().onAuthStateChanged
   (
        function(user) 
        {
            if (user) 
            {     
                firebase.database().ref("Personas").on("value", 
                function(snap) 
                {
                    snap.forEach
                    (
                       (dato)=>
                        {
                            var id= dato.key;
                            var datoa = dato.val();
                            ID.push(id);
                            Nick.push(datoa.nickName);
                            Escuela.push(datoa.escingresar);
                            if(id===user.uid)
                            {
                                Id=id;
                                Ni=datoa.nickName;
                                Escu=datoa.escingresar;   
                            }             
                        }
                    );
                    for(var i=0;i<ID.length;i++)
                    {
                        if(Escuela[i]===Escu)
                        {
                            ID2.push(ID[i]);
                            Nick2.push(Nick[i]);
                        }
                    }
                    Desplegar(ID,Nick,ID2,Nick2, Ni,Id);
                }, 
                function (errorObject) 
                {
                    console.error(errorObject.code);
                });
            } 
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );   
}
function Desplegar(iD,nick,iD2,nick2,mnick,mid)
{            
    var N=mnick;
    var I=mid;
    var reference= firebase.database().ref("Respuestas");
    reference.on("value",function(snap)
    {
        var datos=snap.val();
        snap.forEach
        (
           (dato)=>
            {
                var id= dato.key;
                var datoa = dato.val();
                //global
                for(var i=0;i<iD.length;i++)
                {
                    if(id===iD[i])
                    {
                        IDt.push(iD[i]);
                        Num=IDt.length;
                        Lugart=new Array(Num);
                        Nickt.push(nick[i]);
                        var Aci=new Array();
                        var A=0;
                        var AE=0;
                        var Tot=new Array();
                        var T=0;
                        var TE=0;
                        //aci
                        if(datoa.RazonamientoMatematico!==undefined)
                            Aci.push(datoa.RazonamientoMatematico);
                        else
                            Aci.push(0);
                        if(datoa.Algebra!==undefined)
                            Aci.push(datoa.Algebra);
                        else
                            Aci.push(0);
                        if(datoa.GeometriayTrigonometria!==undefined)
                            Aci.push(datoa.GeometriayTrigonometria);
                        else
                            Aci.push(0);
                        if(datoa.GeometriaAnalitica!==undefined)
                            Aci.push(datoa.GeometriaAnalitica);
                        else
                            Aci.push(0);
                        if(datoa.CalculoDiferencialeIntegral!==undefined)
                            Aci.push(datoa.CalculoDiferencialeIntegral);
                        else
                            Aci.push(0);
                        if(datoa.ProbabilidadyEstadistica!==undefined)
                            Aci.push(datoa.ProbabilidadyEstadistica);
                        else
                            Aci.push(0);
                        if(datoa.ProduccionEscrita!==undefined)
                            Aci.push(datoa.ProduccionEscrita);
                        else
                            Aci.push(0);
                        if(datoa.ComprensiondeTextos!==undefined)
                            Aci.push(datoa.ComprensiondeTextos);
                        else
                            Aci.push(0);
                        if(datoa.Biologia!==undefined)
                            Aci.push(datoa.Biologia);
                        else
                            Aci.push(0);
                        if(datoa.Quimica!==undefined)
                            Aci.push(datoa.Quimica);
                        else
                            Aci.push(0);
                        if(datoa.Fisica!==undefined)
                            Aci.push(datoa.Fisica);
                        else
                            Aci.push(0);
                        //tot
                        if(datoa.totalRazonamientoMatematico!==undefined)
                            Tot.push(datoa.totalRazonamientoMatematico);
                        else
                            Tot.push(0);
                        if(datoa.totalAlgebra!==undefined)
                            Tot.push(datoa.totalAlgebra);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriayTrigonometria!==undefined)
                            Tot.push(datoa.totalGeometriayTrigonometria);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriaAnalitica!==undefined)
                            Tot.push(datoa.totalGeometriaAnalitica);
                        else
                            Tot.push(0);
                        if(datoa.totalCalculoDiferencialeIntegral!==undefined)
                            Tot.push(datoa.totalCalculoDiferencialeIntegral);
                        else
                            Tot.push(0);
                        if(datoa.totalProbabilidadyEstadistica!==undefined)
                            Tot.push(datoa.totalProbabilidadyEstadistica);
                        else
                            Tot.push(0);
                        if(datoa.totalProduccionEscrita!==undefined)
                            Tot.push(datoa.totalProduccionEscrita);
                        else
                            Tot.push(0);
                        if(datoa.totalComprensiondeTextos!==undefined)
                            Tot.push(datoa.totalComprensiondeTextos);
                        else
                            Tot.push(0);
                        if(datoa.totalBiologia!==undefined)
                            Tot.push(datoa.totalBiologia);
                        else
                            Tot.push(0);
                        if(datoa.totalQuimica!==undefined)
                            Tot.push(datoa.totalQuimica);
                        else
                            Tot.push(0);
                        if(datoa.totalFisica!==undefined)
                            Tot.push(datoa.totalFisica);
                        else
                            Tot.push(0);                   
                        for(var j=0;j<11;j++)
                        {
                            A=A+Aci[j];
                            T=T+Tot[j];
                        }
                        var m=parseFloat(parseFloat((A*100)/(T)).toFixed(2));
                        Pun.push(m);
                    }
                }
                //escolar
                for(var i=0;i<iD2.length;i++)
                {
                    if(id===iD2[i])
                    {
                        ID2t.push(iD2[i]);
                        Num2=ID2t.length;
                        Lugar2t=new Array(Num2);
                        Nick2t.push(nick2[i]);
                        var Aci=new Array(11);
                        var Tot=new Array(11);
                        //aci
                        if(datoa.RazonamientoMatematico!==undefined)
                            Aci.push(datoa.RazonamientoMatematico);
                        else
                            Aci.push(0);
                        if(datoa.Algebra!==undefined)
                            Aci.push(datoa.Algebra);
                        else
                            Aci.push(0);
                        if(datoa.GeometriayTrigonometria!==undefined)
                            Aci.push(datoa.GeometriayTrigonometria);
                        else
                            Aci.push(0);
                        if(datoa.GeometriaAnalitica!==undefined)
                            Aci.push(datoa.GeometriaAnalitica);
                        else
                            Aci.push(0);
                        if(datoa.CalculoDiferencialeIntegral!==undefined)
                            Aci.push(datoa.CalculoDiferencialeIntegral);
                        else
                            Aci.push(0);
                        if(datoa.ProbabilidadyEstadistica!==undefined)
                            Aci.push(datoa.ProbabilidadyEstadistica);
                        else
                            Aci.push(0);
                        if(datoa.ProduccionEscrita!==undefined)
                            Aci.push(datoa.ProduccionEscrita);
                        else
                            Aci.push(0);
                        if(datoa.ComprensiondeTextos!==undefined)
                            Aci.push(datoa.ComprensiondeTextos);
                        else
                            Aci.push(0);
                        if(datoa.Biologia!==undefined)
                            Aci.push(datoa.Biologia);
                        else
                            Aci.push(0);
                        if(datoa.Quimica!==undefined)
                            Aci.push(datoa.Quimica);
                        else
                            Aci.push(0);
                        if(datoa.Fisica!==undefined)
                            Aci.push(datoa.Fisica);
                        else
                            Aci.push(0);
                        //tot
                        if(datoa.totalRazonamientoMatematico!==undefined)
                            Tot.push(datoa.totalRazonamientoMatematico);
                        else
                            Tot.push(0);
                        if(datoa.totalAlgebra!==undefined)
                            Tot.push(datoa.totalAlgebra);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriayTrigonometria!==undefined)
                            Tot.push(datoa.totalGeometriayTrigonometria);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriaAnalitica!==undefined)
                            Tot.push(datoa.totalGeometriaAnalitica);
                        else
                            Tot.push(0);
                        if(datoa.totalCalculoDiferencialeIntegral!==undefined)
                            Tot.push(datoa.totalCalculoDiferencialeIntegral);
                        else
                            Tot.push(0);
                        if(datoa.totalProbabilidadyEstadistica!==undefined)
                            Tot.push(datoa.totalProbabilidadyEstadistica);
                        else
                            Tot.push(0);
                        if(datoa.totalProduccionEscrita!==undefined)
                            Tot.push(datoa.totalProduccionEscrita);
                        else
                            Tot.push(0);
                        if(datoa.totalComprensiondeTextos!==undefined)
                            Tot.push(datoa.totalComprensiondeTextos);
                        else
                            Tot.push(0);
                        if(datoa.totalBiologia!==undefined)
                            Tot.push(datoa.totalBiologia);
                        else
                            Tot.push(0);
                        if(datoa.totalQuimica!==undefined)
                            Tot.push(datoa.totalQuimica);
                        else
                            Tot.push(0);
                        if(datoa.totalFisica!==undefined)
                            Tot.push(datoa.totalFisica);
                        else
                            Tot.push(0);
                        for(var j=0;j<11;j++)
                        {
                            AE=AE+Aci[j];
                            TE=TE+Tot[j];
                        }
                        var m=parseFloat(parseFloat((A*100)/(T)).toFixed(2));
                        Pun2.push(m);     
                    }
                }    
            }
        ); 
        //ordenar 
        var aux=parseFloat(parseFloat(0).toFixed(2));
        var auxid="";
        var auxni="";
        //global
        for (var i = 0; i < Pun.length - 1; i++) {
            for (var x = i + 1; x < Pun.length; x++) {
                if (Pun[x] > Pun[i]) {
                    aux = Pun[i];
                    auxid = IDt[i];
                    auxni = Nickt[i];
                    Pun[i] = Pun[x];
                    IDt[i] = IDt[x];
                    Nickt[i] = Nickt[x];            
                    Pun[x] = aux;                                
                    IDt[x] = auxid;                                
                    Nickt[x] = auxni;                    
                }
            }
        }
        //escolar
        for (var i = 0; i < Pun2.length - 1; i++) {
            for (var x = i + 1; x < Pun2.length; x++) {
                if (Pun2[x] > Pun2[i]) {
                    aux = Pun2[i];
                    auxid = ID2t[i];
                    auxni = Nick2t[i];
                    Pun2[i] = Pun2[x];
                    ID2t[i] = ID2t[x];
                    Nick2t[i] = Nick2t[x];
                    Pun2[x] = aux;
                    ID2t[x] = auxid;
                    Nick2t[x] = auxni;
                }
            }
        }
        
        for(var i=0; i<Num; i++)
        {
            Lugart.push(i+1);
            if(IDt[i]===I)
            {
                Lugar=i+1;
            }
        }
        for(var i=0;i<Num2;i++)
        {
            Lugar2t.push(i+1);
            if(ID2t[i]===I)
            {
                Lugar2=i+1;                
            }
        }
            
        RankGlobal+="<table>"+
                        "<tr>"+
                                "<td>"+ "<input name='titulo' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='Ranking Global'>"+"</td>"+
                                "<td>"+ "<input name='MNickName' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='"+N+"'>" + "</td>"+
                                "<td>"+ "<input name='Lugar' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='"+Lugar+" / "+Num+"'>" + "</td>"+
    
                        "</tr>"+
                        "<tr>"+
                                "<td>"+ "<input name='Posicion0' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='Posicion'>"+"</td>"+
                                "<td>"+ "<input name='NickName0' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='NickName'>" + "</td>"+
                                "<td>"+ "<input name='Porcentaje0' type='text' size= '20' style = 'background-color: blue; border: 2px solid black;' readonly value='Puntaje %'>" + "</td>"+
                                +"<br>"+
                        "</tr>";
        for(var j=0;j<IDt.length;j++)
        {
            var posicion= j+ 1;
            RankGlobal+= 
                        "<tr>"+
                                "<td>"+ "<input name='Posicion' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ posicion +"'>"+"</td>"+
                                "<td>"+ "<input name='NickName' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ Nickt[j] +"'>" + "</td>"+
                                "<td>"+ "<input name='Porcentaje' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ Pun[j] +"'>" + "</td>"+
    
                        "</tr>"
                        ;
        }
        RankGlobal+="</table>";

        RankEscolar+= 
                        "<table>"+
                        "<tr>"+
                                "<td>"+ "<input name='tituloE' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='Ranking Global'>"+"</td>"+
                                "<td>"+ "<input name='MNickNameE' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='"+N+"'>" + "</td>"+
                                "<td>"+ "<input name='LugarE' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='"+Lugar2+" / "+Num2+"'>" + "</td>"+
                                "</td>"+
                        "</tr>"+
                        "<tr>"+
                                "<td>"+ "<input name='Posicion0E' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='Posicion'>"+"</td>"+
                                "<td>"+ "<input name='NickName0E' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='NickName'>" + "</td>"+
                                "<td>"+ "<input name='Porcentaje0E' type='text' size= '20' style = 'background-color: red; border: 2px solid black;' readonly value='Puntaje %'>" + "</td>"+
                                "</td>"+
                        "</tr>";
        for(var j=0;j<ID2t.length;j++)
        {
            var posicion= j+ 1;
            RankEscolar+= 
                        "<tr>"+
                                "<td>"+ "<input name='PosicionE' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ posicion +"'>"+"</td>"+
                                "<td>"+ "<input name='NickNameE' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ Nick2t[j] +"'>" + "</td>"+
                                "<td>"+ "<input name='PorcentajeE' type='text' size= '20' style = 'background-color: #fffff; border: 2px solid black;' readonly value='"+ Pun2[j] +"'>" + "</td>"+
                                "</td>"+
                        "</tr>";
        }
        RankEscolar+= "</table>";
        var tBodyG=document.getElementById("ranG");
        tBodyG.innerHTML = RankGlobal;
        var tBodyE=document.getElementById("ranE");
        tBodyE.innerHTML = RankEscolar;
        MiPosicion(Lugar,Num);
    }, 
    function (errorObject)
    {
        console.error(errorObject.code);
    });

}

function NickEscPer()
{
   firebase.auth().onAuthStateChanged
   (
        function(user) 
        {
            if (user) 
            {     
                firebase.database().ref("Personas").on("value", 
                function(snap) 
                {
                    snap.forEach
                    (
                       (dato)=>
                        {
                            var id= dato.key;
                            var datoa = dato.val();
                            ID.push(id);
                            Nick.push(datoa.nickName);
                            Escuela.push(datoa.escingresar);
                            if(id===user.uid)
                            {
                                Id=id;
                                Ni=datoa.nickName;
                                Escu=datoa.escingresar;   
                            }             
                        }
                    );
                    for(var i=0;i<ID.length;i++)
                    {
                        if(Escuela[i]===Escu)
                        {
                            ID2.push(ID[i]);
                            Nick2.push(Nick[i]);
                        }
                    }
                    DesplegarPer(ID,Nick,ID2,Nick2, Ni,Id);
                }, 
                function (errorObject) 
                {
                    console.error(errorObject.code);
                });
            } 
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );   
}
function DesplegarPer(iD,nick,iD2,nick2,mnick,mid)
{            
    var N=mnick;
    var I=mid;
    var reference= firebase.database().ref("Respuestas");
    reference.on("value",function(snap)
    {
        var datos=snap.val();
        snap.forEach
        (
           (dato)=>
            {
                var id= dato.key;
                var datoa = dato.val();
                //global
                for(var i=0;i<iD.length;i++)
                {
                    if(id===iD[i])
                    {
                        IDt.push(iD[i]);
                        Num=IDt.length;
                        Lugart=new Array(Num);
                        Nickt.push(nick[i]);
                        var Aci=new Array();
                        var A=0;
                        var AE=0;
                        var Tot=new Array();
                        var T=0;
                        var TE=0;
                        //aci
                        if(datoa.RazonamientoMatematico!==undefined)
                            Aci.push(datoa.RazonamientoMatematico);
                        else
                            Aci.push(0);
                        if(datoa.Algebra!==undefined)
                            Aci.push(datoa.Algebra);
                        else
                            Aci.push(0);
                        if(datoa.GeometriayTrigonometria!==undefined)
                            Aci.push(datoa.GeometriayTrigonometria);
                        else
                            Aci.push(0);
                        if(datoa.GeometriaAnalitica!==undefined)
                            Aci.push(datoa.GeometriaAnalitica);
                        else
                            Aci.push(0);
                        if(datoa.CalculoDiferencialeIntegral!==undefined)
                            Aci.push(datoa.CalculoDiferencialeIntegral);
                        else
                            Aci.push(0);
                        if(datoa.ProbabilidadyEstadistica!==undefined)
                            Aci.push(datoa.ProbabilidadyEstadistica);
                        else
                            Aci.push(0);
                        if(datoa.ProduccionEscrita!==undefined)
                            Aci.push(datoa.ProduccionEscrita);
                        else
                            Aci.push(0);
                        if(datoa.ComprensiondeTextos!==undefined)
                            Aci.push(datoa.ComprensiondeTextos);
                        else
                            Aci.push(0);
                        if(datoa.Biologia!==undefined)
                            Aci.push(datoa.Biologia);
                        else
                            Aci.push(0);
                        if(datoa.Quimica!==undefined)
                            Aci.push(datoa.Quimica);
                        else
                            Aci.push(0);
                        if(datoa.Fisica!==undefined)
                            Aci.push(datoa.Fisica);
                        else
                            Aci.push(0);
                        //tot
                        if(datoa.totalRazonamientoMatematico!==undefined)
                            Tot.push(datoa.totalRazonamientoMatematico);
                        else
                            Tot.push(0);
                        if(datoa.totalAlgebra!==undefined)
                            Tot.push(datoa.totalAlgebra);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriayTrigonometria!==undefined)
                            Tot.push(datoa.totalGeometriayTrigonometria);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriaAnalitica!==undefined)
                            Tot.push(datoa.totalGeometriaAnalitica);
                        else
                            Tot.push(0);
                        if(datoa.totalCalculoDiferencialeIntegral!==undefined)
                            Tot.push(datoa.totalCalculoDiferencialeIntegral);
                        else
                            Tot.push(0);
                        if(datoa.totalProbabilidadyEstadistica!==undefined)
                            Tot.push(datoa.totalProbabilidadyEstadistica);
                        else
                            Tot.push(0);
                        if(datoa.totalProduccionEscrita!==undefined)
                            Tot.push(datoa.totalProduccionEscrita);
                        else
                            Tot.push(0);
                        if(datoa.totalComprensiondeTextos!==undefined)
                            Tot.push(datoa.totalComprensiondeTextos);
                        else
                            Tot.push(0);
                        if(datoa.totalBiologia!==undefined)
                            Tot.push(datoa.totalBiologia);
                        else
                            Tot.push(0);
                        if(datoa.totalQuimica!==undefined)
                            Tot.push(datoa.totalQuimica);
                        else
                            Tot.push(0);
                        if(datoa.totalFisica!==undefined)
                            Tot.push(datoa.totalFisica);
                        else
                            Tot.push(0);                   
                        for(var j=0;j<11;j++)
                        {
                            A=A+Aci[j];
                            T=T+Tot[j];
                        }
                        var m=parseFloat(parseFloat((A*100)/(T)).toFixed(2));
                        Pun.push(m);
                    }
                }
                //escolar
                for(var i=0;i<iD2.length;i++)
                {
                    if(id===iD2[i])
                    {
                        ID2t.push(iD2[i]);
                        Num2=ID2t.length;
                        Lugar2t=new Array(Num2);
                        Nick2t.push(nick2[i]);
                        var Aci=new Array(11);
                        var Tot=new Array(11);
                        //aci
                        if(datoa.RazonamientoMatematico!==undefined)
                            Aci.push(datoa.RazonamientoMatematico);
                        else
                            Aci.push(0);
                        if(datoa.Algebra!==undefined)
                            Aci.push(datoa.Algebra);
                        else
                            Aci.push(0);
                        if(datoa.GeometriayTrigonometria!==undefined)
                            Aci.push(datoa.GeometriayTrigonometria);
                        else
                            Aci.push(0);
                        if(datoa.GeometriaAnalitica!==undefined)
                            Aci.push(datoa.GeometriaAnalitica);
                        else
                            Aci.push(0);
                        if(datoa.CalculoDiferencialeIntegral!==undefined)
                            Aci.push(datoa.CalculoDiferencialeIntegral);
                        else
                            Aci.push(0);
                        if(datoa.ProbabilidadyEstadistica!==undefined)
                            Aci.push(datoa.ProbabilidadyEstadistica);
                        else
                            Aci.push(0);
                        if(datoa.ProduccionEscrita!==undefined)
                            Aci.push(datoa.ProduccionEscrita);
                        else
                            Aci.push(0);
                        if(datoa.ComprensiondeTextos!==undefined)
                            Aci.push(datoa.ComprensiondeTextos);
                        else
                            Aci.push(0);
                        if(datoa.Biologia!==undefined)
                            Aci.push(datoa.Biologia);
                        else
                            Aci.push(0);
                        if(datoa.Quimica!==undefined)
                            Aci.push(datoa.Quimica);
                        else
                            Aci.push(0);
                        if(datoa.Fisica!==undefined)
                            Aci.push(datoa.Fisica);
                        else
                            Aci.push(0);
                        //tot
                        if(datoa.totalRazonamientoMatematico!==undefined)
                            Tot.push(datoa.totalRazonamientoMatematico);
                        else
                            Tot.push(0);
                        if(datoa.totalAlgebra!==undefined)
                            Tot.push(datoa.totalAlgebra);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriayTrigonometria!==undefined)
                            Tot.push(datoa.totalGeometriayTrigonometria);
                        else
                            Tot.push(0);
                        if(datoa.totalGeometriaAnalitica!==undefined)
                            Tot.push(datoa.totalGeometriaAnalitica);
                        else
                            Tot.push(0);
                        if(datoa.totalCalculoDiferencialeIntegral!==undefined)
                            Tot.push(datoa.totalCalculoDiferencialeIntegral);
                        else
                            Tot.push(0);
                        if(datoa.totalProbabilidadyEstadistica!==undefined)
                            Tot.push(datoa.totalProbabilidadyEstadistica);
                        else
                            Tot.push(0);
                        if(datoa.totalProduccionEscrita!==undefined)
                            Tot.push(datoa.totalProduccionEscrita);
                        else
                            Tot.push(0);
                        if(datoa.totalComprensiondeTextos!==undefined)
                            Tot.push(datoa.totalComprensiondeTextos);
                        else
                            Tot.push(0);
                        if(datoa.totalBiologia!==undefined)
                            Tot.push(datoa.totalBiologia);
                        else
                            Tot.push(0);
                        if(datoa.totalQuimica!==undefined)
                            Tot.push(datoa.totalQuimica);
                        else
                            Tot.push(0);
                        if(datoa.totalFisica!==undefined)
                            Tot.push(datoa.totalFisica);
                        else
                            Tot.push(0);
                        for(var j=0;j<11;j++)
                        {
                            AE=AE+Aci[j];
                            TE=TE+Tot[j];
                        }
                        var m=parseFloat(parseFloat((A*100)/(T)).toFixed(2));
                        Pun2.push(m);     
                    }
                }    
            }
        ); 
        //ordenar 
        var aux=parseFloat(parseFloat(0).toFixed(2));
        var auxid="";
        var auxni="";
        //global
        for (var i = 0; i < Pun.length - 1; i++) {
            for (var x = i + 1; x < Pun.length; x++) {
                if (Pun[x] > Pun[i]) {
                    aux = Pun[i];
                    auxid = IDt[i];
                    auxni = Nickt[i];
                    Pun[i] = Pun[x];
                    IDt[i] = IDt[x];
                    Nickt[i] = Nickt[x];            
                    Pun[x] = aux;                                
                    IDt[x] = auxid;                                
                    Nickt[x] = auxni;                    
                }
            }
        }
        //escolar
        for (var i = 0; i < Pun2.length - 1; i++) {
            for (var x = i + 1; x < Pun2.length; x++) {
                if (Pun2[x] > Pun2[i]) {
                    aux = Pun2[i];
                    auxid = ID2t[i];
                    auxni = Nick2t[i];
                    Pun2[i] = Pun2[x];
                    ID2t[i] = ID2t[x];
                    Nick2t[i] = Nick2t[x];
                    Pun2[x] = aux;
                    ID2t[x] = auxid;
                    Nick2t[x] = auxni;
                }
            }
        }
        
        for(var i=0; i<Num; i++)
        {
            Lugart.push(i+1);
            if(IDt[i]===I)
            {
                Lugar=i+1;
            }
        }
        for(var i=0;i<Num2;i++)
        {
            Lugar2t.push(i+1);
            if(ID2t[i]===I)
            {
                Lugar2=i+1;                
            }
       }
        MiPosicion(Lugar,Num);
    }, 
    function (errorObject)
    {
        console.error(errorObject.code);
    });

}

function MiPosicion(Lug,Nu)
{
    var RG=document.getElementById("Ranking");
    RG.innerHTML = "RANKING GLOBAL: " + Lug + "/" + Nu;    
}
