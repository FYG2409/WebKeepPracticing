var Aciertos = [];
var AcierPor = [];
var Errores = [];
var Total = [];
var Materias = ['Razonamiento' , 'Algebra' , 'Geometria' , 'GAnalitica' , 'Calculo' , 'Probabilidad' , 'PEscrita' , 'Compresion' , 'Biologia' , 'Quimica' , 'Fisica'];
var C1= 'rgb(97  , 185 , 255)';
var C2= 'rgb(255 , 167 , 97)';
var C3= 'rgb(252 , 166 , 246)';
var C4= 'rgb(246 , 255 , 131)';
var C5= 'rgb(166 , 166 , 252)';
var C6= 'rgb(166 , 252 , 197)';
var C7= 'rgb(188 , 106 , 106)';
var C8= 'rgb(2   , 71  , 117)';
var C9= 'rgb(181 , 103 , 255)';
var C10= 'rgb(217, 176 , 80)';
var C11= 'rgb(138, 220 , 201)';
var Colores =  [C1, C2 , C3 , C4 , C5 , C6, C7, C8 , C9 , C10, C11];

function BuscarBD()
{   
    
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.database().ref("Respuestas/" + user.uid).on("value", 
                function(querySnapshot) 
                {
                    var Res= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Por;
                        
                        alert("ENCONTRADO");
                        alert(Res.Algebra);
                        
                        Aciertos.push(Res.RazonamientoMatematico);
                        Total.push(Res.totalRazonamientoMatematico);
                        Errores.push(Res.totalRazonamientoMatematico - Res.RazonamientoMatematico);
                        
                        if(Res.totalRazonamientoMatematico !== null)
                        {
                           Por= ((Res.RazonamientoMatematico)*100)/Res.totalRazonamientoMatematico;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        Aciertos.push(Res.Algebra);
                        Total.push(Res.totalAlgebra);
                        Errores.push(Res.totalAlgebra - Res.Algebra);
                        
                        if(Res.totalAlgebra !== null)
                        {
                           Por= ((Res.Algebra)*100)/Res.totalAlgebra;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        Aciertos.push(Res.GeometriayTrigonometria);
                        Total.push(Res.totalGeometriayTrigonometria);
                        Errores.push(Res.totalGeometriayTrigonometria - Res.GeometriayTrigonometria);
                        
                        if(Res.totalGeometriayTrigonometria !== null)
                        {
                           Por= ((Res.GeometriayTrigonometria)*100)/Res.totalGeometriayTrigonometria;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        Aciertos.push(Res.GeometriaAnalitica);
                        Total.push(Res.totalGeometriaAnalitica);
                        Errores.push(Res.totalGeometriaAnalitica - Res.GeometriaAnalitica);
                        
                        if(Res.totalGeometriaAnalitica !== null)
                        {
                           Por= ((Res.GeometriaAnalitica)*100)/Res.totalGeometriaAnalitica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        Aciertos.push(Res.CalculoDiferencialeIntegral);
                        Total.push(Res.totalCalculoDiferencialeIntegral);
                        Errores.push(Res.totalCalculoDiferencialeIntegral - Res.CalculoDiferencialeIntegral);
                        
                        if(Res.totalCalculoDiferencialeIntegral !== null)
                        {
                           Por= ((Res.CalculoDiferencialeIntegral)*100)/Res.totalCalculoDiferencialeIntegral;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        Aciertos.push(Res.ProbabilidadyEstadistica);
                        Total.push(Res.totalProbabilidadyEstadistica);
                        Errores.push(Res.totalProbabilidadyEstadistica - Res.ProbabilidadyEstadistica);
            
                        if(Res.totalProbabilidadyEstadistica !== null)
                        {
                           Por= ((Res.ProbabilidadyEstadistica)*100)/Res.totalProbabilidadyEstadistica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        Aciertos.push(Res.ProduccionEscrita);   
                        Total.push(Res.totalProduccionEscrita);
                        Errores.push(Res.totalProduccionEscrita - Res.ProduccionEscrita);
            
                        if(Res.totalProduccionEscrita !== null)
                        {
                           Por= ((Res.ProduccionEscrita)*100)/Res.totalProduccionEscrita;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        Aciertos.push(Res.ComprensiondeTextos);
                        Total.push(Res.totalComprensiondeTextos);
                        Errores.push(Res.totalComprensiondeTextos - Res.ComprensiondeTextos);
            
                        if(Res.totalComprensiondeTextos !== null)
                        {
                           Por= ((Res.ComprensiondeTextos)*100)/Res.totalComprensiondeTextos;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        Aciertos.push(Res.Biologia);
                        Total.push(Res.totalBiologia);
                        Errores.push(Res.totalBiologia - Res.Biologia);
            
                        if(Res.totalBiologia !== null)
                        {
                           Por= ((Res.Biologia)*100)/Res.totalBiologia;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        Aciertos.push(Res.Quimica);
                        Total.push(Res.totalQuimica);
                        Errores.push(Res.totalQuimica - Res.Quimica);
            
                        if(Res.totalQuimica !== null)
                        {
                           Por= ((Res.Quimica)*100)/Res.totalQuimica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        Aciertos.push(Res.Fisica);
                        Total.push(Res.totalFisica);
                        Errores.push(Res.totalFisica - Res.Fisica);
                        
                        if(Res.totalFisica !== null)
                        {
                           Por= ((Res.Fisica)*100)/Res.totalFisica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
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
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
    
    
}

function GraficasPastel()
{
    AcierPor = [];
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.database().ref("Respuestas/" + user.uid).on("value", 
                function(querySnapshot) 
                {
                    var Res= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Por;
                        if(Res.totalRazonamientoMatematico !== null)
                        {
                           Por= ((Res.RazonamientoMatematico)*100)/Res.totalRazonamientoMatematico;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalAlgebra !== null)
                        {
                           Por= ((Res.Algebra)*100)/Res.totalAlgebra;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalGeometriayTrigonometria !== null)
                        {
                           Por= ((Res.GeometriayTrigonometria)*100)/Res.totalGeometriayTrigonometria;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalGeometriaAnalitica !== null)
                        {
                           Por= ((Res.GeometriaAnalitica)*100)/Res.totalGeometriaAnalitica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalCalculoDiferencialeIntegral !== null)
                        {
                           Por= ((Res.CalculoDiferencialeIntegral)*100)/Res.totalCalculoDiferencialeIntegral;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalProbabilidadyEstadistica !== null)
                        {
                           Por= ((Res.ProbabilidadyEstadistica)*100)/Res.totalProbabilidadyEstadistica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalProduccionEscrita !== null)
                        {
                           Por= ((Res.ProduccionEscrita)*100)/Res.totalProduccionEscrita;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalComprensiondeTextos !== null)
                        {
                           Por= ((Res.ComprensiondeTextos)*100)/Res.totalComprensiondeTextos;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalBiologia !== null)
                        {
                           Por= ((Res.Biologia)*100)/Res.totalBiologia;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalQuimica !== null)
                        {
                           Por= ((Res.Quimica)*100)/Res.totalQuimica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalFisica !== null)
                        {
                           Por= ((Res.Fisica)*100)/Res.totalFisica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        GenerarPastel();
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
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
}

function GraficasBarra()
{
    AcierPor = [];
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.database().ref("Respuestas/" + user.uid).on("value", 
                function(querySnapshot) 
                {
                    var Res= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Por;
                        
                        if(Res.totalRazonamientoMatematico !== null)
                        {
                           Por= ((Res.RazonamientoMatematico)*100)/Res.totalRazonamientoMatematico;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalAlgebra !== null)
                        {
                           Por= ((Res.Algebra)*100)/Res.totalAlgebra;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalGeometriayTrigonometria !== null)
                        {
                           Por= ((Res.GeometriayTrigonometria)*100)/Res.totalGeometriayTrigonometria;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalGeometriaAnalitica !== null)
                        {
                           Por= ((Res.GeometriaAnalitica)*100)/Res.totalGeometriaAnalitica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalCalculoDiferencialeIntegral !== null)
                        {
                           Por= ((Res.CalculoDiferencialeIntegral)*100)/Res.totalCalculoDiferencialeIntegral;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalProbabilidadyEstadistica !== null)
                        {
                           Por= ((Res.ProbabilidadyEstadistica)*100)/Res.totalProbabilidadyEstadistica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalProduccionEscrita !== null)
                        {
                           Por= ((Res.ProduccionEscrita)*100)/Res.totalProduccionEscrita;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalComprensiondeTextos !== null)
                        {
                           Por= ((Res.ComprensiondeTextos)*100)/Res.totalComprensiondeTextos;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalBiologia !== null)
                        {
                           Por= ((Res.Biologia)*100)/Res.totalBiologia;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
            
                        if(Res.totalQuimica !== null)
                        {
                           Por= ((Res.Quimica)*100)/Res.totalQuimica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        
                        if(Res.totalFisica !== null)
                        {
                           Por= ((Res.Fisica)*100)/Res.totalFisica;
                           AcierPor.push(Por);
                        }
                        else
                        {
                            Por=0;
                           AcierPor.push(Por); 
                        }
                        GenerarBarra();
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
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
}

function GenerarBarra()
{
    Limpiar();
    var canvas = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext("2d");
    ctx.clearRect(0,0,600,600);
    
    var densityData = 
    {
        label: 'Porcentaje de Aciertos por Materia',
        data: AcierPor,
        backgroundColor: Colores,
        borderColor: Colores,
        borderWidth: 2,
        hoverBorderWidth: 0
    };
 
    var chartOptions = 
    {
        scales: {
            yAxes: [{
            barPercentage: 0.5
        }]
        },
        elements: {
        rectangle: 
        {
            borderSkipped: 'left'
        }
        }
    };
 
    var barChart = new Chart(ctx, {
        type: 'horizontalBar',
  data: {
    labels: Materias,
    datasets: [densityData]
  },
  options: chartOptions
});
}

function GenerarPastel()
{
    Limpiar();
    var canvas = document.getElementById('myChart');
    canvas.width=canvas.width;
    var ctx = document.getElementById('myChart').getContext('2d');
    
    
    var chart = new Chart(ctx, {
    type: 'doughnut',
    data:{
	datasets: [{
		data: AcierPor,
		backgroundColor: Colores,
		label: 'Comparacion de navegadores'}],
		labels: Materias},
    options: {responsive: true, maintainAspectRatio: false}
});
}

function Limpiar()
{
    var Div = document.getElementById("Graficas");
    Div.innerHTML="";
    var Canvas="<canvas id='myChart'></canvas>";
    Div.innerHTML=Canvas;
}