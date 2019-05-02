class principalUsrControl{
    
    constructor(){
        this.totalPreguntas = 0;
        this.conta = 0;
        this.totales = new Array();
        this.todasMaterias = false;
        this.nodoPregunta = "PreguntasActivity";
        this.materia;
    }
    
    validaInfinito(tag){
        this.materia = tag;
        this.todasMaterias = true;
        this.conta = 0;
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
    
    valida(materia){
        firebase.database().ref(this.nodoPregunta+"/"+materia).once("value").then(function(snapshot) {
            if(snapshot.exists()){
                mas(true, parseInt(snapshot.numChildren()));
            }else{
                mas(false);
            }
            
        }, function (errorObject) {
            console.error(errorObject.code);
        });
        
    }
    
    mm(existe, numHijos){
        if(existe){
            this.totalPreguntas = numHijos;

        }else{
            //Si aun no hay registros para esa materia
            this.totalPreguntas = 0;
        }
        if(this.todasMaterias){
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
                        if(this.totalPreguntas>this.totales[i]){
                            this.totalPreguntas = this.totales[i];
                        }
                }
                if(this.totalPreguntas === 0){
                    alert("Lo sentimos aun no tenemos preguntas para todas las materias");
                }else{
                    var pagina = "preguntas.html";
                    location.href= pagina + "?"+"materia="+this.materia+"&"+"totalHijos="+this.totalPreguntas;
                }
            }
        }else{
            if(this.totalPreguntas === 0){
                //Si no existieron preguntas
                alert("Lo sentimos aun no tenemos preguntas para esa materia");
            }else{
                var pagina = "preguntas.html";
                location.href= pagina + "?"+"materia="+this.materia+"&"+"totalHijos="+this.totalPreguntas;
            }
        }
    }
    
    validaExistenPreguntas(tag){
        this.materia = tag;
        this.todasMaterias=false;
        this.conta = 0;
        this.valida(this.materia);
    }
    
}