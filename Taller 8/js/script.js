$(document).ready(iniciarEventos);
function iniciarEventos(){
    llenarDepartamentos();
    /* $("#departamento").change(llenarMunicipios); */
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
function llenarMunicipios(){
    let select = document.getElementById('departamento');
    let departamento = select.options[select.selectedIndex].value;
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
    .then(response => response.json())
    .then(json => {
        let regiones = json;
        let municipios=[];
        let html='';
        regiones.forEach(element => {
            /* departamentos.push(element.departamento) */
            if(element.departamento==departamento){
                municipios.push(element.municipio);
            }
        });
        municipios.sort();
        municipios.forEach(element =>{
            html+='<option>'+element+'</option>';
        });
        document.getElementById('municipio').innerHTML=html;
    });
}
/* Función para eliminar elementos repetidos de un array */
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

    