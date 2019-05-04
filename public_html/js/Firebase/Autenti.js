function IniciarSesion()
{
    var Email = document.getElementById("Email").value;
    var Contr = document.getElementById("Contra").value;
    if(Email === "" || Contr === "")
    {
        alert("Llena todos los campos");
    }
    else
    {
        firebase.auth().signInWithEmailAndPassword(Email, Contr).then
                (
                    result =>
                    {
                        alert("INICIO DE SESISION EXITOSO");
                        var user = firebase.auth().currentUser;
                        var Verificado = user.emailVerified;
                        if(Verificado === true)
                        {
                            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
                            function() 
                            {
                                window.location.href = "Menu.html";
                                return firebase.auth().signInWithEmailAndPassword(Email, Contr);
                            })
                            .catch(function(error) 
                            {
                                var errorCode = error.code;
                                var errorMessage= error.message;
                            });
                        }
                        else
                        {
                            alert("VERIFICA TU CORREO POR FAVOR")
                        }
                    }
                ).catch
                (  
                    error =>
                    {
                        alert("HA OCURRIDO UN ERROR " + error);
                   
                    }
                );
    }
}

function CerrarSesion()
{
   var user = firebase.auth().currentUser;

        if (user)
        {
            firebase.auth().signOut().then(() =>{
                alert("Sesion Cerrada");
                window.location.href = "../index.html";
            }).catch(error =>{
               alert("Ha ocurrido un error " + error);
            });
        }
        else 
        {
           alert("No hay Sesion activa");
           window.location.href = "../index.html";
        }
}

function OlvidarCont()
{
    var auth = firebase.auth();
    var Email = document.getElementById("Email").value;

   if(Email === "")
   {
       alert("Debes llenar el campo de Email");
   }
   else
   {
        auth.sendPasswordResetEmail(Email).then
        (   function() 
            {
                alert("El correo ha sido enviado");
            
            }
        ).catch
        (
            function(error)
            {
                alert("Ocurrio un error: " + error);
            }
        );
   }
}

function VerSesionAbi()
{
    var user = firebase.auth().currentUser;
    if(user)
    {
        alert("Usted Ya A Iniciado Sesion");
       window.location.href = "Menu.html";
    }
    
}
