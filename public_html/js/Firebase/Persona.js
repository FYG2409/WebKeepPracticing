function Validaciones()
{
    var Usua = document.getElementById("Usu").value;
    var Email = document.getElementById("Ema").value;
    var Escue = document.getElementById("Esc").value;
    var Carre = document.getElementById("Carr").value;
    var Cont1 = document.getElementById("Con1").value;
    var Cont2 = document.getElementById("Con2").value;
    if(Usua === "" || Email === "" || Escue === "" || Carre === "" || Cont1 === "" || Cont2==="") 
    {
        alert("Debes llenar todos los campos");
    }
    else
    {
        Registrar(Email, Cont1);
    }
}

function Registrar( Ema, Con1)
{
    var Usua = document.getElementById("Usu").value;
    var Escue = document.getElementById("Esc").value;
    var Carre = document.getElementById("Carr").value;
    
            firebase.auth().createUserWithEmailAndPassword(Ema, Con1).then
            (
                result =>
                {
                    firebase.auth().signInWithEmailAndPassword(Ema, Con1).then(
                        result =>
                        {
                            var user = firebase.auth().currentUser;
                            var ID = user.uid;
                            Registro_2(ID, user);
                        }
                        ).catch
                        (   
                            error =>
                            {
                                alert("HA OCURRIDO UN ERROR " + error);
                            }
                        );
                }
            ).catch
            (   
                error =>
                {
                    alert("HA OCURRIDO UN ERROR " + error);
                }
            );
        
}

function Registro_2(ID , User)
{
    var Usua = document.getElementById("Usu").value;
    var Email = document.getElementById("Ema").value;
    var Escue = document.getElementById("Esc").value;
    var Carre = document.getElementById("Carr").value;
    var Cont1 = document.getElementById("Con1").value;
    var Cont2 = document.getElementById("Con2").value;
    
    var database = firebase.database();
    firebase.database().ref('Personas/' + ID).set({
        contra: Cont1 ,
        email: Email,
        escActual: Escue,
        escingresar: Carre,
        idPersona: ID,
        nickName: Usua
        }).then
        (
            result =>
            {   
                CorreoAu(User);
                alert("El registro fue exitoso, por favor confirma tu correo " );
                window.location.href = "../index.html";
            }
        ).catch
        (   
            error =>
            {
                alert("HA OCURRIDO UN ERROR " + error);
                User.delete().then(function() {
                }).catch(function(error) {
                });
            }
        );
}

function CorreoAu(user)
{
    user.sendEmailVerification().then(function() 
    {
        
    }).catch(function(error) 
    {
        alert(error);
    });

}

function Traer_Per()
{
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.database().ref("Personas/" + user.uid).on("value", 
                function(querySnapshot) 
                {
                    var Per= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Div = document.getElementById("Persona");
                        Div.innerHTML="";
                        var Canvas=
                                "<P>NOMBRE:" +Per.nickName +"</P>" + 
                                "<P>EMAIL:" +Per.email +"</P>" + 
                                "<P>ESCUELA ACTUAL:" +Per.escActual + "</P>" +
                                "<P>ESCUELA INGRESAR:" +Per.escingresar + "</P>";
                        Div.innerHTML=Canvas;
                        GraficasBarra();
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
///FALLA MODIFICAR CONTRA
function ModificaPer()
{
    var Usua = document.getElementById("Usu").value;
    var Escue = document.getElementById("Esc").value;
    var Carre = document.getElementById("Carr").value;
    var Cont1 = document.getElementById("Con1").value;
    
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {  
                if(Usua !== "")
                {
                    firebase.database().ref("Personas/" + user.uid + "/nickName").set(Usua);
                }
                if(Escue !== "")
                {
                    firebase.database().ref("Personas/" + user.uid + "/escActual").set(Escue);
                }
                if(Carre !== "")
                {
                    firebase.database().ref("Personas/" + user.uid + "/escingresar").set(Carre);
                }
                if(Cont1 !== "")
                {
                    user.updatePassword(Cont1).then(
                        function() 
                        {
                            firebase.database().ref("Personas/" + user.uid + "/contra").set(Cont1);
                        }).catch(
                                function(error) 
                        {
                            alert("Lamentablemente no pudimos cambiar la contraseña: " +error);
                        });
                }
                alert("Los cambios se han realizado");
                window.location.href = "ModificarPer.html";
            } 
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
}

function ValidaModi()
{
    
    var ContA = document.getElementById("ConA").value;
    var Cont1 = document.getElementById("Con1").value;
    var Cont2 = document.getElementById("Con2").value;
    
    if(ContA ==="")
    {
        alert("Para Realizar Cualquier Modificacion Debes Ingresar Tu Contraseña Actual");  
    }
    else
    {
        firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.database().ref("Personas/" + user.uid).on("value", 
                function(querySnapshot) 
                {
                    var Per= querySnapshot.val();
                    if(querySnapshot.exists())
                    {
                        var Contra = Per.contra;
                        if(Contra === ContA)
                        {
                            if(Cont2 !== null)
                            {
                               if(Cont2 === Cont1)
                               {
                                  ModificaPer();
                               }
                               else
                               {
                                  alert("La confirmacion de la nueva contraseña es diferente corrigela");
                               }
                            }
                            else
                            {
                                ModificaPer();
                            }
                        }
                        else
                        {
                            alert("ERROR: Esa no es tu contraseña actual");  
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
}

function AlertaEliminar()
{
    var Email = document.getElementById("Email").value;
    var Contr = document.getElementById("Contra").value;
    if(Email === "" || Contr === "")
    {
        alert("Llena todos los campos");
    }
    else
    {
        var opcion = confirm("¿DESEAS ELIMINAR TU CUENTA?");
        if (opcion === true) 
        {
          Eliminar();
	} else {
	  
	}
    }
}

function Eliminar()
{
    var Email = document.getElementById("Email").value;
    var Contr = document.getElementById("Contra").value;
    firebase.auth().onAuthStateChanged
    (
        function(user) 
        {
            if (user) 
            {   
                firebase.auth().signInWithEmailAndPassword(Email, Contr).then
                (
                    result =>
                    {
                        var User = firebase.auth().currentUser;
                        var ID= User.uid;
                        firebase.database().ref("Respuestas/" + ID).remove().then(function() 
                        {
                            alert("Respuesta Eliminada");
                            
                        }).catch(function(error) 
                        {
                            alert("A ocurrido un error: " + error);
                        });
                        firebase.database().ref("Personas/" + ID).remove();
                        User.delete().then(function() 
                        {
                            alert("El Usuario ha sido eliminado");
                            window.location.href="../index.html";
                        }).catch(function(error) 
                        {
                            alert("A ocurrido un error: " + error);
                        });
                    }
                );
            } 
            else 
            {
                alert("La sesion a caducado");
                window.location.href = "../index.html";
            }
        }
    );
}