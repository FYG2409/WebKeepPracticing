class Pregunta{
    
    constructor(){
        this.numAleatorio;
        this.totalPreguntas;
        this.conta = 0;
        this.contaMaterias;
        this.todasMaterias;
        this.opcMaterias = ["Razonamiento Matematico", "Algebra", "Geometria y Trigonometria", "Geometria Analitica", "Calculo Diferencial e Integral", "Probabilidad y Estadistica", "Produccion Escrita", "Comprension de Textos", "Biologia", "Quimica", "Fisica"];
        this.bande = 0;
        this.contaBuenas = 0;
        this.contaMalas = 0;
        this.contaTotal = 0;
        this.codigoDuelo;
        this.tipoPersona;
        this.email;
        this.materiaSeleccionada;
        this.solucion;
        this.tipoDuelo;
        this.nodoPregunta = "PreguntasActivity";
        this.nodoDuelos = "Duelos";
        this.nodoPreguntasImg = "PreguntasActivity/";
        this.nodoRespuestasImg = "Respuestas/";
        this.nodoRespuestas="Respuestas";
        this.nodoPersona="Personas";
        this.preguntaObj = {};
        this.idPersona;
        this.existe;
        this.contaMateria;
        this.contaMateriaTotal;
    }
    
    traeImagen(nombre, regCode, nodo){
        var storageRef = storage.ref();
        storageRef.child(nodo+"/"+nombre).getDownloadURL().then(function(url) {
            var img;
            if(regCode === 1){
                img = document.getElementById("imgPregunta");
            }else
            if(regCode === 2){
                img = document.getElementById("imgRa");
            }else
            if(regCode === 3){
                img = document.getElementById("imgRb");
            }else
            if(regCode === 4){
                img = document.getElementById("imgRc");
            }else
            if(regCode === 5){
                img = document.getElementById("imgRd");
            }
            
            img.src = url;
            
          }).catch(function(error) {
            console.error(error);
          });
    }
        
    generarNumAleatorio(){
        this.numAleatorio = Math.floor(((Math.random() * this.totalPreguntas) + 1));
        this.traePregunta();
    }
    
    gPreg(snap){
        this.preguntaObj = snap;
        this.muestraPregunta();
    }
    
    traePregunta(){
        if(this.todasMaterias){
            this.materiaSeleccionada = this.opcMaterias[this.contaMaterias];
        }
        var nodi = this.nodoPregunta;
        var mate = this.materiaSeleccionada;
        var numeroAleatorio = this.numAleatorio;
        
        jala();
        function jala(){
            firebase.database().ref(nodi+"/"+mate+"/"+numeroAleatorio.toString()).once("value").then(function(snapshot) {
                dat(snapshot.val());
            }, function (errorObject) {
                console.error(errorObject.code);
            });
        }
        
    }
    
    muestraPregunta(){
        var txtPregunta = document.getElementById("txtPregunta");
        var txtRa = document.getElementById("txtRa");
        var txtRb = document.getElementById("txtRb");
        var txtRc = document.getElementById("txtRc");
        var txtRd = document.getElementById("txtRd");
        
        txtPregunta.innerHTML = "<p>"+this.preguntaObj.pregunta+"</p>";
        txtRa.innerHTML = "<p>"+this.preguntaObj.rA+"</p>";
        txtRb.innerHTML = "<p>"+this.preguntaObj.rB+"</p>";
        txtRc.innerHTML = "<p>"+this.preguntaObj.rC+"</p>";
        txtRd.innerHTML = "<p>"+this.preguntaObj.rD+"</p>";
        this.solucion = this.preguntaObj.solucion;
        
        
        //Validando si existan imagenes

        if(!(this.preguntaObj.preguntaImg === undefined)){
            this.traeImagen(this.preguntaObj.preguntaImg, 1, this.nodoPreguntasImg);
            document.getElementById("imgPregunta").style.visibility = "visible";
        }else{
            document.getElementById("imgPregunta").style.display = "none";
        }

        if(!(this.preguntaObj.rAImg === undefined)){
            this.traeImagen(this.preguntaObj.rAImg, 2, this.nodoRespuestasImg);
            document.getElementById("imgRa").style.visibility = "visible";
        }else {
            document.getElementById("imgRa").style.display = "none";
        }

        if(!(this.preguntaObj.rBImg === undefined)){
            this.traeImagen(this.preguntaObj.rBImg, 3, this.nodoRespuestasImg);
            document.getElementById("imgRb").style.visibility = "visible";
        }else {
            document.getElementById("imgRb").style.display = "none";
        }

        if(!(this.preguntaObj.rCImg === undefined)){
            this.traeImagen(this.preguntaObj.rCImg, 4, this.nodoRespuestasImg);
            document.getElementById("imgRc").style.visibility = "visible";
        }else {
            document.getElementById("imgRc").style.display = "none";
        }

        if(!(this.preguntaObj.rDImg === undefined)){
            this.traeImagen(this.preguntaObj.rDImg, 5, this.nodoRespuestasImg);
            document.getElementById("imgRd").style.visibility = "visible";
        }else {
            document.getElementById("imgRd").style.display = "none";
        }
    }
    
    clickeo(tag){
        var resA = document.getElementById("resA");
        var resB = document.getElementById("resB");
        var resC = document.getElementById("resC");
        var resD = document.getElementById("resD");
        var siguiente = document.getElementById("siguiente");
        
        
        //el tag es el de cada boton, agregar en el onclick en el controller
        var  resSeleccionada = tag;
        
        this.bande = this.bande + 1;
        
        if(this.bande === 1){
            if(resSeleccionada === this.solucion){
                //Si la contesto bien
                this.contaBuenas = this.contaBuenas + 1;
                this.contaTotal = this.contaTotal + 1;
            }else {
                //Si la contesto mal
                this.contaMalas = this.contaMalas + 1;
                this.contaTotal = this.contaTotal + 1;
            }

            if (this.solucion ==="A") {
                resA.style.backgroundColor = "green";
            } else if (this.solucion ==="B") {
                resB.style.backgroundColor = "green";
            } else if (this.solucion ==="C") {
                resC.style.backgroundColor = "green";
            } else if (this.solucion ==="D") {
                resD.style.backgroundColor = "green";
            }

            siguiente.disabled = false;
        }
    }
    
    limpiaCampos(){
        var txtPregunta = document.getElementById("txtPregunta");
        var txtRa = document.getElementById("txtRa");
        var txtRb = document.getElementById("txtRb");
        var txtRc = document.getElementById("txtRc");
        var txtRd = document.getElementById("txtRd");
        
        var resA = document.getElementById("resA");
        var resB = document.getElementById("resB");
        var resC = document.getElementById("resC");
        var resD = document.getElementById("resD");
        
        //LIMPIANDO TEXTO
        txtPregunta.removeChild(txtPregunta.firstChild);
        txtRa.removeChild(txtRa.firstChild);
        txtRb.removeChild(txtRb.firstChild);
        txtRc.removeChild(txtRc.firstChild);
        txtRd.removeChild(txtRd.firstChild);
        
        //LIMPIANDO COLOR
        resA.style.backgroundColor = "white";
        resB.style.backgroundColor = "white";
        resC.style.backgroundColor = "white";
        resD.style.backgroundColor = "white";
        
    }
    
    clickeoSiguiente(){
        var siguiente = document.getElementById("siguiente");
        siguiente.disabled = true;
        
        if (this.numAleatorio === this.totalPreguntas) {
            this.numAleatorio = 1;
        } else {
            this.numAleatorio = this.numAleatorio + 1;
        }

        if(this.todasMaterias){
            if(this.contaMaterias===(this.opcMaterias.length-1)){
                this.contaMaterias = 0;
            }else{
                this.contaMaterias = this.contaMaterias + 1;
            }
        }
        
        this.traePregunta();
        this.bande = 0;
        this.limpiaCampos();
    }
    
    muestraPopUp(mensaje){
        alert("Buenas: "+this.contaBuenas+" Malas: "+this.contaMalas+" Mensaje: "+mensaje);
    }   
    
    salir(){
        if(!(this.codigoDuelo === undefined)){
            //CUANDO ABANDONAMOS A UN DUELO
            firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).off();
            firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).remove().catch(error =>{
                console.error(error);
            });
            alert("Abandonaste la partida");
        }else{
            this.guardaRespuestas();
            this. muestraPopUp("Felicidades...!");
        }
    }
    
    inicio(){
        
        var countdownText = document.getElementById("countdown_text");
        countdownText.style.display = "none";
        
        this.existe = false;
        this.materiaSeleccionada = "Biologia";
        this.totalPreguntas = 2;

        if(this.materiaSeleccionada === "todas"){
            this.todasMaterias = true;
        }else{
            this.todasMaterias = false;
        }
        
        this.generarNumAleatorio();
        
        //---------RECOGIENDO VARIABLES DE DUELO---------
            
            var cadVariables = location.search.substring(1,location.search.length);
            var arrVariables = cadVariables.split("&");
            
            for(var i = 0; i<arrVariables.length; i++){
                var arrVariableActual = arrVariables[i].split("=");
                var vari = arrVariableActual[0];
                var variValor = arrVariableActual[1];
                if(vari === "email"){
                    this.email = variValor;
                }else
                    if(vari === "tipoPersona"){
                        this.tipoPersona = variValor;
                    }else
                        if(vari === "numInicio"){
                            this.numInicio = variValor;
                        }else
                            if(vari === "codigoDuelo"){
                                this.codigoDuelo = variValor;
                                if((!(this.codigoDuelo === undefined)) && this.tipoDuelo === "contraTiempo"){
                                    //Si es un duelo
                                    countdownText.style.display = "block";
                                    this.ponTimer();
                                }
                            }else
                                if(vari === "tipoDuelo"){
                                    this.tipoDuelo = variValor;
                                }
            }
        //----------------------------------------------
        this.traePersona();
    }
    
    abandonoD(){
        this.conta = this.conta + 1;
        if(this.conta === 1){
            //LA PERSONA ABANDONO EL DUELO
            alert("La otra persona abandono el duelo");
            window.location.href = "principalUsrs.html";
        }
    }
    
    escuchaDuelo(){
        firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).on("child_removed", function(snapshot) {
            abandono();
          }, function (errorObject) {
            console.error(errorObject.code);
        });
    }
    
    //------PARA RESPUESTAS--------
    traePersona(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.email = user.email;
            }else
                console.log("No se reconoce al usuario");
        });
    
        firebase.database().ref(this.nodoPersona).once("value").then(function(snapshot) {
            snapshot.forEach(function(child) {
                traePer(child.val());
            });
        }, function (errorObject) {
            console.error(errorObject.code);
        });
    
    }
    
    pp(manda){
        if(this.email === manda.email){
            //SE ENCONTRO LA PERSONA CON EL EMAIL INDICADO
            this.idPersona = manda.idPersona;
            this.trae();
        }
    }
    
    trae(){
        var nodoMateria = this.materiaSeleccionada.replace(" ","");
        var nodoTotalMateria = "total"+nodoMateria;
        
        firebase.database().ref(this.nodoRespuestas+"/"+this.idPersona+"/"+nodoMateria).once("value").then(function(snapshot) {
            vali(snapshot);
        }, function (errorObject) {
            console.error(errorObject.code);
        });
    }
    
    val(snapshot){
        if(snapshot.exists()){
            this.existe = true;
            //Si ya existen respuestas para este usuario
            this.contaMateria = parseInt(snapshot.val().toString());
        }else{
            this.existe = false;
            //Si aun no existen respuestas para este usuario
        }
    }
    
    jji(){
        this.existe = true;
    }
    
    guardaRespuestas(){
        var ndRespuestas = this.nodoRespuestas;
        var idPer = this.idPersona;
        
        if(this.codigoDuelo === undefined){
            if(!(this.todasMaterias)){
                var nodoMateria = this.materiaSeleccionada.replace(" ","");
                var nodoTotalMateria = "total"+nodoMateria;
                if(this.existe){                    
                    var cMateria = this.contaMateria;
                    var cBuenas = this.contaBuenas;
                    var cMalas = this.contaMalas;
                    
                    firebase.database().ref(ndRespuestas+"/"+idPer+"/"+nodoTotalMateria).once("value").then(function(snapshot) {
                        if(snapshot.exists()){
                            
                            jj();
                            
                            var cMateriaTotal = parseInt(snapshot.val().toString());
                            
                            firebase.database().ref(ndRespuestas+"/"+idPer+"/"+nodoMateria).set(cMateria+cBuenas).then(refDoc =>{
                                console.log("Envio 1 exitoso");
                            }).catch(error=>{
                                alert("Error al enviar 1");
                                console.error(error);
                            });

                            firebase.database().ref(ndRespuestas+"/"+idPer+"/"+nodoTotalMateria).set(cMateriaTotal+cBuenas+cMalas).then(refDoc =>{
                                console.log("Envio 2 exitoso");
                            }).catch(error=>{
                                alert("Error al enviar 2");
                                console.error(error);
                            });   
                        }
                    }, function (errorObject) {
                        console.error(errorObject.code);
                    }); 

                }else{
                    var cBuenas = this.contaBuenas;
                    var cMalas = this.contaMalas;
                    firebase.database().ref(ndRespuestas+"/"+idPer+"/"+nodoMateria).set(cBuenas).then(refDoc =>{
                        console.log("Envio 3 exitoso");
                    }).catch(error=>{
                        alert("Error al enviar 3");
                        console.error(error);
                    });
                                        
                    firebase.database().ref(ndRespuestas+"/"+idPer+"/"+nodoTotalMateria).set(cBuenas+cMalas).then(refDoc =>{
                        console.log("Envio 3 exitoso");
                    }).catch(error=>{
                        alert("Error al enviar 3");
                        console.error(error);
                    });
                }
            }

        }

    }
    
    //-----------------------------
    
    //-------PARA TIMER------------

    ponTimer(){
        document.getElementById("countdown_text").style.visibility = "visible";
        this.escuchaDuelo();
        var nodDuelo = this.nodoDuelos;
        var codDuel = this.codigoDuelo;
        
        //Iniciando timer
        var myVar = setInterval(myTimer, 1000);
        var contador = 0;
        
        
        function myTimer() {
            var valorSegundosTxt = document.getElementById("countdown_text").value;
            if(this.conta === 1){
                //La persona abandono el duelo
                clearInterval(myVar);
            }
            if(parseInt(valorSegundosTxt) === 10){//tiempo en segundos
                //AQUI TERMINA EL TIEMPO
                firebase.database().ref(nodDuelo+"/"+codDuel).off();
                
                clearInterval(myVar);
                //------------------------
                guardaDat();

            }else{
                document.getElementById("countdown_text").value = contador++;
            }
        }
    }
    
    guardaDatos(){
        var tipTiem = this.tipoPersona;
        var nodDuelo = this.nodoDuelos;
        var codDuel = this.codigoDuelo;
        var buen = this.contaBuenas;
        
        console.log("BUEN X1 "+buen);
        
        if(tipTiem === "Uno"){
            console.log("Buen "+buen);
            firebase.database().ref(nodDuelo+"/"+codDuel+"/totalBuenasUno").set(buen).then(refDoc =>{
                ganador();
                console.log("Envio 4 exitoso");
            }).catch(error=>{
                alert("Error al enviar 4");
                console.error(error);
            });
        }else
            if(tipTiem === "Dos"){
                firebase.database().ref(nodDuelo+"/"+codDuel+"/totalBuenasDos").set(buen).then(refDoc =>{
                    ganador();
                    console.log("Envio 5 exitoso");
                }).catch(error=>{
                    alert("Error al enviar 5");
                    console.error(error);
                });
            }
    }
    
    verGanador(){
        //-----TRAYENDO GANADOR Y PERDEDOR
        var nodDuel = this.nodoDuelos;
        var codDuel = this.codigoDuelo;
        var tipPer = this.tipoPersona;
        var cBuenas = this.contaBuenas;
        var cMalas = this.contaMalas;
        firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).on("value", function(querySnapshot){
            if(querySnapshot.exists()){
                //Si existe el codigo
                var duelo = querySnapshot.val();
                var contaBuenasUno = duelo.totalBuenasUno;
                var contaBuenasDos = duelo.totalBuenasDos;
                
                if(!(contaBuenasUno === undefined)){
                    var contaBuenasUnoTxt = contaBuenasUno.toString();
                }
                
                if(!(contaBuenasDos === undefined)){
                    var contaBuenasDosTxt = contaBuenasDos.toString();
                }
                
                var msj;

                if(contaBuenasUnoTxt === undefined ||contaBuenasDosTxt === undefined){
                    msj="Espera...";
                }else{
                    console.log("Uno "+contaBuenasUno+"Dos "+contaBuenasDos);
                    if(contaBuenasUno > contaBuenasDos){
                        if(tipPer === "Uno"){
                            msj="Ganaste";
                        }else
                        if(tipPer === "Dos"){
                            msj="Perdiste";
                        }
                    }else
                        if(contaBuenasDos > contaBuenasUno){
                            if(tipPer === "Dos"){
                                msj="Ganaste";
                            }else
                                if(tipPer === "Uno"){
                                    msj="Perdiste";
                                }
                        }else
                            if(contaBuenasDos === contaBuenasUno){
                                msj="Empate";
                            }
                        
                    firebase.database().ref(nodDuel+"/"+codDuel).remove().catch(error =>{
                        console.error(error);
                    });
                }
                window.location.href = "principalUsrs.html";
                alert("Buenas: "+cBuenas+" Malas: "+cMalas+" Mensaje: "+msj);
            }
        }, function (errorObject) {
            console.error(errorObject.code);
        });
        //--------------------------------
    }
    
}