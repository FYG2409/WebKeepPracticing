var Aciertos = [];
var Errores = [];
var Total = [];
var Materias = ['Razonamiento' , 'Algebra' , 'Geometria' , 'GAnalitica' , 'Calculo' , 'Probabilidad' , 'PEscrita' , 'Compresion' , 'Biologia' , 'Quimica'];

function TraerID()
{
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {
                var ID = user.uid;
                return ID;
            } 
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
}

function BuscarBD()
{
    var ID = TraerID();
    var database = firebase.database();
    var Respuestas = firebase.database().ref('Respuestas/' + ID);
    Respuestas.on("value", function(querySnapshot) 
    {
            var Res= querySnapshot.val();
            alert(Res.Algebra);
            Aciertos.push(Res.RazonamientoMatematico);
            Total.push(Res.totalRazonamientoMatematico);
            Errores.push(Res.totalRazonamientoMatematico - Res.RazonamientoMatematico);
            
            Aciertos.push(Res.Algebra);
            Total.push(Res.totalAlgebra);
            Errores.push(Res.totalAlgebra - Res.Algebra);
            
            Aciertos.push(Res.GeometriayTrigonometria);
            Total.push(Res.totalGeometriayTrigonometria);
            Errores.push(Res.totalGeometriayTrigonometria - Res.GeometriayTrigonometria);
            
            Aciertos.push(Res.GeometriaAnalitica);
            Total.push(Res.totalGeometriaAnalitica);
            Errores.push(Res.totalGeometriaAnalitica - Res.GeometriaAnalitica);
            
            Aciertos.push(Res.CalculoDiferencialeIntegral);
            Total.push(Res.totalCalculoDiferencialeIntegral);
            Errores.push(Res.totalCalculoDiferencialeIntegral - Res.CalculoDiferencialeIntegral);
            
            Aciertos.push(Res.ProbabilidadyEstadistica);
            Total.push(Res.totalProbabilidadyEstadistica);
            Errores.push(Res.totalProbabilidadyEstadistica - Res.ProbabilidadyEstadistica);
            
            Aciertos.push(Res.ProduccionEscrita);
            Total.push(Res.totalProduccionEscrita);
            Errores.push(Res.totalProduccionEscrita - Res.ProduccionEscrita);
            
            Aciertos.push(Res.ComprensiondeTextos);
            Total.push(Res.totalComprensiondeTextos);
            Errores.push(Res.totalComprensiondeTextos - Res.ComprensiondeTextos);
            
            Aciertos.push(Res.Biologia);
            Total.push(Res.totalBiologia);
            Errores.push(Res.totalBiologia - Res.Biologia);
            
            Aciertos.push(Res.Quimica);
            Total.push(Res.totalQuimica);
            Errores.push(Res.totalQuimica - Res.Quimica);
            
            Aciertos.push(Res.Fisica);
            Total.push(Res.totalFisica);
            Errores.push(Res.totalFisica - Res.Fisica);
    });
}


function Graficas()
{
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data:{
	datasets: [{
		data: Aciertos,
		backgroundColor: ['#42a5f5', 'red', 'green','blue','violet'],
		label: 'Comparacion de navegadores'}],
		labels: Materias},
    options: {responsive: true}
});
}


