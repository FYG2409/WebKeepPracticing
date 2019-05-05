function Validaciones()
{
    var Usua = document.getElementById("Usu").value;
    var Email = document.getElementById("Ema").value;
    var Select2 = document.getElementById("Esc");
    var Escue = Select2.options[Select2.selectedIndex].value;;
    var Cont1 = document.getElementById("Con1").value;
    var Cont2 = document.getElementById("Con2").value;
    var Select = document.getElementById("Carre");
    var Carre = Select.options[Select.selectedIndex].value;
    
    if(Usua === "" || Email === "" || Escue === "Seleccione una Opcion" || Carre === "Seleccione una Opcion" || Cont1 === "" || Cont2==="") 
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
    var Select2 = document.getElementById("Esc");
    var Escue = Select2.options[Select2.selectedIndex].value;
    var Select = document.getElementById("Carre");
    var Carre = Select.options[Select.selectedIndex].value;
    
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
    var Select2 = document.getElementById("Esc");
    var Escue = Select2.options[Select2.selectedIndex].value;;
    var Select = document.getElementById("Carre");
    var Carre = Select.options[Select.selectedIndex].value;
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
                                "<P>ESCUELA INGRESAR:" +Per.escingresar + "</P>" +
                                "<input id='email' type='text' size= '1' style = 'visibility:hidden' readonly='true' value='"+Per.email+"'>" 
                        ;
                        
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
    var Select2 = document.getElementById("Esc");
    var Escue = Select2.options[Select2.selectedIndex].value;;
    var Select = document.getElementById("Carre");
    var Carre = Select.options[Select.selectedIndex].value;
    var Cont1 = document.getElementById("Con1").value;
    var ContA = document.getElementById("ConA").value;
    var Email = document.getElementById("email").value;
    
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
                if(Escue !== "Seleccione una Opcion")
                {
                    firebase.database().ref("Personas/" + user.uid + "/escActual").set(Escue);
                }
                if(Carre !== "Seleccione una Opcion")
                {
                    firebase.database().ref("Personas/" + user.uid + "/escingresar").set(Carre);
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
                firebase.database().ref("Personas/" + user.uid + "/nickName").set(null);
                firebase.database().ref("Personas/" + user.uid + "/escActual").set(null);
                firebase.database().ref("Personas/" + user.uid + "/escingresar").set(null);
                firebase.database().ref("Personas/" + user.uid + "/contra").set(null);
                firebase.database().ref("Personas/" + user.uid + "/email").set(null);
                firebase.database().ref("Personas/" + user.uid + "/idPersona").set(null);
                firebase.database().ref("Personas/" + user.uid).set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/RazonamientoMatematico").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/Algebra").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/GeometriayTrigonometria").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/GeometriaAnalitica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/CalculoDiferencialeIntegral").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/ProbabilidadyEstadistica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/ProduccionEscrita").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/ComprensiondeTextos").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/Biologia").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/Quimica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/Fisica").set(null);
                
                firebase.database().ref("Respuestas/" + user.uid + "/totalRazonamientoMatematico").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalAlgebra").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalGeometriayTrigonometria").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalGeometriaAnalitica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalCalculoDiferencialeIntegral").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalProbabilidadyEstadistica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalProduccionEscrita").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalComprensiondeTextos").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalBiologia").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalQuimica").set(null);
                firebase.database().ref("Respuestas/" + user.uid + "/totalFisica").set(null);
                
                firebase.database().ref("Respuestas/" + user.uid).set(null);
                
                firebase.auth().signInWithEmailAndPassword(Email, Contr).then
                (
                    result =>
                    {
                        var User = firebase.auth().currentUser;
                        User.delete().then(function() 
                        {
                            alert("El Usuario ha sido eliminado");
                            window.location.href="../index.html";
                        }).catch(function(error) 
                        {
                            alert("A ocurrido un error: " + error);
                        });
                    }
                ).catch
                (  
                    error =>
                    {
                        alert("HA OCURRIDO UN ERROR " + error);
                   
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

function RestableCont()
{
    var Email = document.getElementById("email").value;
     auth.sendPasswordResetEmail(Email).then
        (   function() 
            {
                alert("Revisa tu correo ahi podras cambiar tu contraseña");
            
            }
        ).catch
        (
            function(error)
            {
                alert("Ocurrio un error: " + error);
            }
        );
    
}
