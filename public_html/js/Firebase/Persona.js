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
