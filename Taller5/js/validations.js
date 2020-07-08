function valida_envia(){

    //valido el pais
    if (document.formUsuario.pais.selectedIndex==0){
        alert("Debe seleccionar un pais")
        document.formUsuario.pais.focus()
        return 0;
    }

    if (document.formUsuario.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.formUsuario.apellido.focus()   
        return 0;
    }

    //valido el apellido
    if (document.formUsuario.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.formUsuario.apellido.focus()
        return 0;
    }

    if (document.formUsuario.apellido.value.length>25){
        alert("Sus papás se dieron garra con su apellido")
        document.formUsuario.apellido.focus()
        return 0;
    }

    //Validando la direccion

    if (document.formUsuario.direccion.value.subsrt()){
        alert("Direccion incorrecta")
        document.formUsuario.direccion.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.formUsuario.submit();
}