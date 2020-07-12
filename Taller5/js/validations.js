function valida_envia(){
    let bandera=0
    //valido el pais
    if (document.formUsuario.pais.selectedIndex==0){
        alert("Debe seleccionar un pais")
        document.formUsuario.pais.focus()
        bandera=1
        return 0;
    }

    //Validando Nombre
    if (document.formUsuario.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.formUsuario.nombre.focus()
        bandera=1   
        return 0;
    }
    if (document.formUsuario.nombre.value.length>25){
        alert("El nombre puede tener maximo 25 caracteres")
        document.formUsuario.nombre.focus()
        bandera=1
        return 0;
    }
    //valido el apellido
    if (document.formUsuario.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.formUsuario.apellido.focus()
        bandera=1
        return 0;
    }

    if (document.formUsuario.apellido.value.length>25){
        alert("Sus papás se dieron garra con su apellido")
        document.formUsuario.apellido.focus()
        bandera=1
        return 0;
    }
    //Validación de direccion
    let dato = document.formUsuario.direccion.value;
    if(dato.substring(0,2)!="av" && dato.substring(0,3)!="cll" && dato.substring(0,3)!="cra" && dato.substring(0,3)!="anv" && dato.substring(0,5)!="trans"){
        alert("Error en la direccion")
        document.formUsuario.direccion.focus();
        bandera=1;
        return 0;
    }
    //Validando campo de usuario
    let usu=document.formUsuario.usuario.value.length
    if(usu<10 && usu>20){
        alert("Error, el campo usuario debe contener almenos 10 caracteres y maximo 20")
        document.formUsuario.usuario.focus()
        bandera=1
        return 0;
    }

    var patron=/[\^$.*+?=!:|\\/()\[\]{}]/;
    let usustr=document.formUsuario.usuario.value
    if (patron.test(usustr)){
        alert('Error, El camapo usuario tiene al menos un carácter ^ $. * +? =! : | \ / () [] {}');
        document.formUsuario.usuario.focus();
        bandera=1;
        return 0;
    }

    //Validando Contraseña

    let contr=document.formUsuario.contrasena.value.length;
    if(contr<1 || contr>20){
        alert('Error, ')
    }

    //Validando Correo

    if(document.formUsuario.email.value.length>200){
        alert("Error en el email")
        document.formUsuario.email.focus();
        bandera=1;
        return 0;
    }

    if(bandera==0){
        //el formulario se envia
        alert("Muchas gracias por enviar el formulario "+datopartido);
        document.formUsuario.submit();
    }
    
}
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
