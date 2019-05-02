class Duelo{
    
    constructor(){
        this.NickName;
        this.email;
        this.codigoDuelo;
        this.tipoDuelo;
        this.conta;
        this.totalPreguntas;
        this.numeroAleatorio;
        this.totales = new Array();
        this.nodoPregunta = "PreguntasActivity";
        this.nodoDuelos = "Duelos";
        this.nodoPersona = "Personas";
    }
    
    metCreaCodigo(){
        document.getElementById("btnCreaCodigo").style.display = "none";
        document.getElementById("btnTengoCodigo").style.display = "none";
        document.getElementById("btnJugar").style.display = "none";
        document.getElementById("codigo").innerHTML = this.codigoDuelo;
        
        //ANTES ESTO ESTABA EN EL BOTON CONTRA TIEMPO
        document.getElementById("tvEsperandoOponente").style.display = "block";
        this.numAleatorio();
        
        /*
        ClipboardManager clipboard = (ClipboardManager) getContext().getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData clip = ClipData.newPlainText("text",  codigoDuelo);
        clipboard.setPrimaryClip(clip);
        */
       
    }
    
    metTengoCodigo(){
        document.getElementById("btnCreaCodigo").style.display = "none";
        document.getElementById("btnTengoCodigo").style.display = "none";
        var btnJugar = document.getElementById("btnJugar");
        btnJugar.style.display = 'block';
        var edtIngresaCodigo = document.getElementById("edtIngresaCodigo");
        edtIngresaCodigo.style.display = 'block';
        
        btnJugar.addEventListener("click", function(){
            var codigoIngresado = edtIngresaCodigo.value;
            if(codigoIngresado === undefined){
                alert("Ingresa un codigo");
            }else{
                mandaCodPerDos(codigoIngresado);
            }
        });
    }
    
    ii(duelo, codigoIngresadoTxt){
        this.tipoDuelo = duelo.tipoDuelo;
        this.numeroAleatorio = duelo.numAleatorio.toString();
        this.totalPreguntas = duelo.totalPreguntas.toString();
        iniciaDos(codigoIngresadoTxt);
    }
    
    validandoCodigoPerDos(codIngresado){
        var codigoIngresadoTxt = codIngresado;
        firebase.database().ref(this.nodoDuelos+"/"+codigoIngresadoTxt).once("value").then(function(snapshot) {
            if(snapshot.exists()){
                //Si existe el codigo
                var duelo = snapshot.val();
                if(duelo.correoPerDos === undefined){
                    //LA SEGUNDA PERSONA ESTA DISPONIBLE
                    iio(duelo, codigoIngresadoTxt);
                }else{
                    //LA SEGUNDA PERSONA NO ESTA DISPONIBLE
                    alert("El codigo esta en uso");
                }
            }else{
                alert("No existe el codigo");}
        }, function (errorObject) {
            console.error(errorObject.code);
        });
    }
    
    validandoCodigoPerUno(){
        this.conta = 0;
        var dueloObj = {
            correoPerUno: this.email,
            numAleatorio: parseFloat(this.numeroAleatorio),
            tipoDuelo: this.tipoDuelo,
            totalPreguntas: parseFloat(this.totalPreguntas)
        };
        console.log(dueloObj);
        firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).set(dueloObj).then(refDoc =>{
            console.log("Registro Exitoso");
        }).catch(error=>{
            alert("Algo fallo");
            console.error(error);
        });
        
        firebase.database().ref(this.nodoDuelos+"/"+this.codigoDuelo).on("value", function(querySnapshot) {
            console.log("Entre");
            if(querySnapshot.exists()){
                //Si existe el codigo
                console.log("Existe el codigo");
                var duelo = querySnapshot.val();
                if(duelo.correoPerDos === undefined){
                    //LA SEGUNDA PERSONA ESTA DISPONIBLE
                    document.getElementById("tvEsperandoOponente").value="Esperado...";
                    console.log("La segunda persona esta disponible");
                }else{
                    console.log("La segunda persona ya no esta disponible");
                    ffm();
                    
                    /*
                     Intent intent = new Intent(getContext(), PreguntasActivity.class);
                            intent.putExtra("materia", "todas");
                            intent.putExtra("codigoDuelo",codigoDuelo);
                            intent.putExtra("tipoPersona", "Uno");
                            intent.putExtra("email", email);
                            intent.putExtra("tipoDuelo", tipoDuelo);
                            intent.putExtra("numInicio", numeroAleatorio);
                            intent.putExtra("totalHijos", totalPreguntas);
                            startActivity(intent);
                     */
                }
                
            }else{
                alert("No existe el codigo");}
        }, function (errorObject) {
            console.error(errorObject.code);
        });
    }
    
    ff(){
        this.conta = this.conta + 1;
        //LA SEGUNDA PERSONA NO ESTA DISPONIBLE
        reiVistas();
        var pagina = "preguntas.html";
        var materia = "todas";
        var codigoDuelo = this.codigoDuelo;
        var tipoPersona = "Uno";
        var email = this.email;
        var tipoDuelo = this.tipoDuelo;
        var numInicio = this.numeroAleatorio;
        var totalHijos = this.totalPreguntas;
        
        location.href= pagina + "?"+"materia="+materia+"&"+"tipoPersona="+tipoPersona+"&"+"email="+email+"&"+"tipoDuelo="+tipoDuelo+"&"+"numInicio="+numInicio+"&"+"totalHijos="+totalHijos+"&"+"codigoDuelo="+codigoDuelo;
        
    }
    
    iniciaDueloPerDos(codigoIngresadoTxt){
        firebase.database().ref(this.nodoDuelos+"/"+codigoIngresadoTxt+"/correoPerDos").set(this.email).then(refDoc =>{
            console.log("Correo Enviado Exitosamente");
        }).catch(error=>{
            alert("Error al enviar correo");
            console.error(error);
        });
        this.reiniciaVistas();
        var pagina = "preguntas.html";
        var materia = "todas";
        var codigoDuelo = codigoIngresadoTxt;
        var tipoPersona = "Dos";
        var tipoDuelo = this.tipoDuelo;
        var numInicio = this.numeroAleatorio;
        var totalHijos = this.totalPreguntas;

        location.href= pagina + "?"+"materia="+materia+"&"+"tipoPersona="+tipoPersona+"&"+"tipoDuelo="+tipoDuelo+"&"+"numInicio="+numInicio+"&"+"totalHijos="+totalHijos+"&"+"codigoDuelo="+codigoDuelo;
    }
    
    reiniciaVistas(){
        document.getElementById("btnCreaCodigo").style.display = 'block';
        document.getElementById("btnTengoCodigo").style.display = 'block';
        document.getElementById("edtIngresaCodigo").style.display = "none";
        document.getElementById("btnJugar").style.display = "none";
        document.getElementById("tvEsperandoOponente").style.display = "none";
        document.getElementById("edtIngresaCodigo").value = "";
    }
    
    valida(materia){
        
        firebase.database().ref(this.nodoPregunta+"/"+materia).once("value").then(function(snapshot) {
            if(snapshot.exists()){
                var numeH = snapshot.numChildren();
                mas(true, materia, numeH);
            }else{
                mas(false, materia);
            }
            
        }, function (errorObject) {
            console.error(errorObject.code);
        });
        
    }
    
    mm(existe, materia, numHijos){
        console.log("Hijos"+numHijos);
        if(existe === true){
            this.totalPreguntas = numHijos;
            console.log("Existo "+materia+" Tam "+this.totalPreguntas);
        }else{
            
            //Si aun no hay registros para esa materia
            this.totalPreguntas = 0;
            console.log("No existo "+materia+" Tam "+this.totalPreguntas);
        }
        console.log("Y "+this.totalPreguntas);
        this.totales[this.conta] = this.totalPreguntas;
        this.conta = this.conta + 1;
        if(this.conta === 11){
            var primera = true;
            this.totalPreguntas = 0;
            for(var i = 0; i<11; i++){
                if(primera){
                    this.totalPreguntas = this.totales[i];
                    primera = false;
                }else
                    if(this.totalPreguntas > this.totales[i]){
                        this.totalPreguntas = this.totales[i];
                    }
            }
            console.log("Totales: "+this.totalPreguntas);
            if(this.totalPreguntas === 0){
                alert("Lo sentimos aun no tenemos preguntas para todas las materias");
            }else{
                //GENERANDO NUM ALEATORIO
                console.log("Total"+this.totalPreguntas);
                this.numeroAleatorio = Math.floor(((Math.random() * this.totalPreguntas) + 1));
                console.log("Aleatorio: "+this.numeroAleatorio);
                this.validandoCodigoPerUno();
            }
        }
    }
    
    numAleatorio(){
        this.tipoDuelo = "contraTiempo";
        this.conta = 0;
        console.log("contador: "+this.conta);
        this.valida("Razonamiento Matematico");
        this.valida("Algebra");
        this.valida("Geometria y Trigonometria");
        this.valida("Geometria Analitica");
        this.valida("Calculo Diferencial e Integral");
        this.valida("Probabilidad y Estadistica");
        this.valida("Produccion Escrita");
        this.valida("Comprension de Textos");
        this.valida("Biologia");
        this.valida("Quimica");
        this.valida("Fisica");
    }
    
    inicio(){
        document.getElementById("edtIngresaCodigo").style.display = "none";
        document.getElementById("btnJugar").style.display = "none";
        document.getElementById("tvEsperandoOponente").style.display = "none";
        
        //-----TRAYENDO PERSONA----
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.email = user.email;
            }else
                console.log("No se reconoce al usuario");
        });
        //-------------------------
        
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
            this.NickName = manda.nickName;
            this.codigoDuelo = "K"+this.NickName+"P";
        }
    }
    
}