
//INICIALIZANDO FIREBASE
    firebase.initializeApp(varConf);
    
    
//PARA DATABASE
    const database = firebase.database();
    
//PARA STORAGE
    const storage = firebase.storage();


//OBSERVADOR DEL CAMBIO DE EN LA SESION
/*
firebase.auth().onAuthStateChanged(user =>{
    if(user){
        //El usuario esta autentificado
        alert("Usuario autentificado");
    }else
        //El usuario no esta autentificado
        alert("Usuario no autentificado");
});
*/

function traeCurrentUser(){
    firebase.auth().onAuthStateChanged(user =>{
        if(user){
            //El usuario esta autentificadozz
            return(user.email);
        }else
            //El usuario no esta autentificado
            console.log("Usuario no reconocido");
    });
}
