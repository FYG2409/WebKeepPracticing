class Autenticacion{
    
    authEmailPass(email,password){
        
    }
    
    iniciaSesion(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password).then(result =>{
            window.location.href = "html/principalUsrs.html";
        }).catch(error =>{
            console.log("autenticacion.js | iniciaSesion: "+error);
        });
    }
    
    cerrarSesion(){
        var user = firebase.auth().currentUser;
        if(user){
            //Si la sesion ya esta iniciada
            return firebase.auth().signOut().then(() =>{
                alert("Sesion Cerrada");
                window.location.href = "../index.html";
            }).catch(error =>{
               console.log("autenticacion.js | cerrarSesion: "+error);
            });
        }
    }   
    
}