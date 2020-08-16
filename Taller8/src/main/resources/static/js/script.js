$(document).ready(iniciarEventos);
function iniciarEventos(){
    llenarDepartamentos();
}
function llenarDepartamentos(){
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let regiones = json;
        let departamentos=[];
        let html='<option value="">Seleccione...</option>';
        regiones.forEach(element => {
            /* html+='<option>'+element.departamento+'</option>'; */
            departamentos.push(element.departamento)
        });
        sinRepetidos=departamentos.unique();
        sinRepetidos.sort();/* Se ordena el vector alfabeticamente */
        sinRepetidos.forEach(element =>{
            html+='<option>'+element+'</option>';
        });
        document.getElementById('lnac').innerHTML=html;
        document.getElementById('lres').innerHTML=html;
    });
}
/* Función para eliminar elementos repetidos de un array */
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

function confirmDelete(id){
	$('#deleteModal').modal('show');
	$("#personIdHiddenInput").val(id);
}

function deletePerson(){
	var id = $("#personIdHiddenInput").val();
    window.location = "deletePerson/"+id;
}

    