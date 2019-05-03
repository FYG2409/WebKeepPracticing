class Registropreg{
    
    constructor(){
        this.filePreg;
        this.fileRA;
        this.fileRB;
        this.fileRC;
        this.fileRD;
        this.filePregURL = null;
        this.fileRAURL = null;
        this.fileRBURL = null;
        this.fileRCURL = null;
        this.fileRDURL = null;
        this.totalP = 5;
        this.conta = 0;
    }
    
    subeImagen(file, tipo){
        var nodo;
        var progreso;
        if(tipo === "Pregunta"){
            nodo = "PreguntasActivity/";
            progreso = document.getElementById("cargaPregunta");
        }else
            if(tipo === "rA"){
                nodo = "Respuestas/";
                progreso = document.getElementById("cargaRA");
            }else
                if(tipo === "rB"){
                    nodo = "Respuestas/";
                    progreso = document.getElementById("cargaRB");
                }else
                    if(tipo === "rC"){
                        nodo = "Respuestas/";
                        progreso = document.getElementById("cargaRC");
                    }else
                        if(tipo === "rD"){
                            nodo = "Respuestas/";
                            progreso = document.getElementById("cargaRD");
                        }
        
        
       //CREAR LA REFERENCIA AL STORAGE
       var storageRef = firebase.storage().ref(nodo+file.name);

       //ACTUALIZAR ARCHIVO
       var task = storageRef.put(file);

       //ACTUALIZAR TIEMPO
       task.on("state_changed",
            function progress(snapshot){
                var porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                progreso.value = porcentaje;
                },
            function error(err){
                console.error(err);
                alert("Error al subir la imagen: "+tipo);
            },
            function complete(){
                console.log("Imgane subida exitosamente");
                var nom = storageRef.name;
                completaSub(nom,tipo);
            }
        );
    }
    
    completaSubidaImg(nombre, tipo){
        if(tipo === "Pregunta"){
            this.filePregURL = nombre;
        }else
            if(tipo === "rA"){
                this.fileRAURL = nombre;
            }else
                if(tipo === "rB"){
                    this.fileRBURL = nombre;
                }else
                    if(tipo === "rC"){
                        this.fileRCURL = nombre;
                    }else
                        if(tipo === "rD"){
                            this.fileRDURL = nombre;
                        }

        this.conta = this.conta + 1;
        if(this.conta === this.totalP){
            this.gPregunta();
        }
    }
    
    cambiandoi(img, e){
        if(img === "pregunta"){
            this.filePreg = e.target.files[0];
        }else
            if(img === "rA"){
                this.fileRA = e.target.files[0];
            }else
                if(img === "rB"){
                    this.fileRB = e.target.files[0];
                }else
                    if(img === "rC"){
                        this.fileRC = e.target.files[0];
                    }else
                        if(img === "rD"){
                            this.fileRD = e.target.files[0];
                        }
    }
    
    escuchaImagenes(){
        var btnPregunta = document.getElementById("btnPregunta");
        var btnRespuestaA = document.getElementById("btnRespuestaA");
        var btnRespuestaB = document.getElementById("btnRespuestaB");
        var btnRespuestaC = document.getElementById("btnRespuestaC");
        var btnRespuestaD = document.getElementById("btnRespuestaD");
                        
        btnPregunta.addEventListener("change", function(e){
            cambiando("pregunta", e);
        });
        
        btnRespuestaA.addEventListener("change", function(e){
            cambiando("rA", e);
        });
        
        btnRespuestaB.addEventListener("change", function(e){
            cambiando("rB", e);
        });
        
        btnRespuestaC.addEventListener("change", function(e){
            cambiando("rC", e);
        });
        
        btnRespuestaD.addEventListener("change", function(e){
            cambiando("rD", e);
        });
    }
    
    guardaPregunta(){
        if(this.filePreg === undefined){
            this.totalP = this.totalP - 1;
        }
        if(this.fileRA === undefined){
            this.totalP = this.totalP - 1;
        }
        if(this.fileRB === undefined){
            this.totalP = this.totalP - 1;
        }
        if(this.fileRC === undefined){
            this.totalP = this.totalP - 1;
        }
        if(this.fileRD === undefined){
            this.totalP = this.totalP - 1;
        }
        if(this.totalP === 0){
            this.gPregunta();
        }
        
        if(!(this.filePreg === undefined)){
            this.subeImagen(this.filePreg, "Pregunta");
        }
        if(!(this.fileRA === undefined)){
            this.subeImagen(this.fileRA, "rA");
        }
        if(!(this.fileRB === undefined)){
            this.subeImagen(this.fileRB, "rB");
        }
        if(!(this.fileRC === undefined)){
            this.subeImagen(this.fileRC, "rC");
        }
        if(!(this.fileRD === undefined)){
            this.subeImagen(this.fileRD, "rD");
        }
        
    }
    
    gPregunta(){
        var materia = document.getElementById("spMaterias").value;
        var solucion = document.getElementById("spSolucion").value;
        var pregunta = document.getElementById("pregunta").value;
        var rATxt = document.getElementById("rA").value;
        var rBTxt = document.getElementById("rB").value;
        var rCTxt = document.getElementById("rC").value;
        var rDTxt = document.getElementById("rD").value;
        
        if(pregunta === ""  || rATxt === "" || rBTxt === ""|| rCTxt === ""|| rDTxt === ""){
            alert("Por favor llena todos los campos");
        }else{
            var preguntaObj = {
                pregunta : pregunta,
                rA: rATxt,
                rB: rBTxt,
                rC: rCTxt,
                rD: rDTxt,
                solucion: solucion,
                preguntaImg: this.filePregURL,
                rAImg: this.fileRAURL,
                rBImg: this.fileRBURL,
                rCImg: this.fileRCURL,
                rDImg: this.fileRDURL
            };

            firebase.database().ref("PreguntasActivity"+"/"+materia).once("value").then(function(snapshot) {
                if(snapshot.exists()){
                    //Si ya hay registros para esa materia
                    var totalHijosMas = (snapshot.numChildren()) + 1;
                    firebase.database().ref("PreguntasActivity"+"/"+materia+"/"+totalHijosMas).set(preguntaObj).then(refDoc =>{
                        alert("Pregunta registrada exitosamente");
                        window.location.href = "registroPregunta.html";
                    }).catch(error=>{
                        alert("Error al enviar pregunta");
                        console.error(error);
                    });
                }else{
                    firebase.database().ref("PreguntasActivity"+"/"+materia+"/1").set(preguntaObj).then(refDoc =>{
                        alert("Pregunta registrada exitosamente");
                        window.location.href = "registroPregunta.html";
                    }).catch(error=>{
                        alert("Error al enviar pregunta");
                        console.error(error);
                    });
                }
            }, function (errorObject) {
                console.error(errorObject.code);
                alert("Error al enviar pregunta");
            });
        }
    }
    
    
    
}