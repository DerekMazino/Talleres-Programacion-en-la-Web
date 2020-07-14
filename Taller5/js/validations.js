function validacionesNombre(){
    //Validando Nombre
    if (document.formUsuario.nombre.value.length==0){
        alert("Tiene que escribir su nombre");
        document.formUsuario.nombre.focus();
        return 1;
    }
    if (document.formUsuario.nombre.value.length>25){
        alert("El nombre puede tener maximo 25 caracteres");
        document.formUsuario.nombre.focus();
        return 1;
    }
    return 0;
}
function validacionesApellido(){
    //valido el apellido
    if (document.formUsuario.apellido.value.length==0){
        alert("Tiene que escribir su apellido");
        document.formUsuario.apellido.focus();
        return 1;
    }
    if (document.formUsuario.apellido.value.length>25){
        alert("Sus papás se dieron garra con su apellido");
        document.formUsuario.apellido.focus();
        return 1;
    }
    return 0;
}

function validarDireccion(){
    //Validación de direccion
    let dato = document.formUsuario.direccion.value;
    if(dato.substring(0,2)!="av" && dato.substring(0,3)!="cll" && dato.substring(0,3)!="cra" && dato.substring(0,3)!="anv" && dato.substring(0,5)!="trans"){
        alert("Error en la direccion");
        document.formUsuario.direccion.focus();
        bandera=1;
        return 1;
    }
    return 0;
}
function validacionesSelectedBox(){
    //valido el pais
    if (document.formUsuario.pais.selectedIndex==0){
        alert("Debe seleccionar un pais");
        document.formUsuario.pais.focus();
        bandera=1;
        return 1;
    }
    return 0;
}

function validacionesUsuario(){
    //Validando campo de usuario
    let usu=document.formUsuario.usuario.value.length;
    if(usu<10 || usu>20){
        alert("Error, el campo usuario debe contener almenos 10 caracteres y maximo 20")
        document.formUsuario.usuario.focus()
        return 1;
    }
    let patron=/[\^$.*+?=!:|\\/()\[\]{}]/;
    let usustr=document.formUsuario.usuario.value;
    if (patron.test(usustr)){
        alert('Error, El campo usuario tiene al menos un carácter ^ $. * +? =! : | \ / () [] {}');
        document.formUsuario.usuario.focus();
        bandera=1;
        return 1;
    }
    return 0;
}

function validacionesContrasena(){
    //Validando Contraseña
    let contr=document.formUsuario.contrasena.value.length;
    let palabra=document.formUsuario.contrasena.value;
    if(contr<15 || contr>20){
        alert('Error, la contraseña debe tener de 15 a 20 caracteres: '+contr);
        document.formUsuario.usuario.focus();
        return 1;
    }
    //Buscar caracteres obligatorios
    let patron=/[#%/&]/;
    if(!patron.test(palabra)){
        alert('Error, la contraseña debe contener por lo menos un caracter #, %, /, o &');
        document.formUsuario.contrasena.focus();
        return 1;
    }
    //Garantizando que tenga un numero por lo menos
    let patron2=/[0-9]{1,}/;
    if(!patron2.test(palabra)){
        alert('La contraseña debe tener numeros');
        document.formUsuario.contrasena.focus();
        return 1;
    }
    //Garantizando mayusculas y minusculas
    let patron3=/[ABCDEFGHYJKLMNÑOPQRSTUVWXYZ]/;
    if(!patron3.test(palabra)){
        alert('La contraseña debe contener mayusculas');
        document.formUsuario.contrasena.focus();
        return 1;
    }    
    return 0;
}

function compararContrasenas(){
    //Validar contraseñas
    let contrasena1=document.formUsuario.contrasena.value;
    let contrasena2=document.formUsuario.contrasena2.value;
    if(contrasena1!=contrasena2){
        alert('Error, las contraseñas no coinciden');
        document.formUsuario.contrasena.focus();
        return 1;
    }
    return 0;
}

function validarEmail(){
    //Validando Correo
    lenEmail=document.formUsuario.email.value.length;
    if(len<1 || len>200){
        alert("Error en el email");
        document.formUsuario.email.focus();
        return 1;
    }
    return 0;
}

function valida_envia(){
    let bandera=0
    bandera=validacionesSelectedBox();
    bandera=validacionesNombre();
    bandera=validacionesApellido();
    bandera=validarDireccion();
    bandera=validacionesUsuario();
    bandera=validacionesContrasena();
    bandera=validarEmail();
    bandera=compararContrasenas();
    if(bandera==0){
        //el formulario se envia
        alert("Muchas gracias por enviar el formulario ");
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


