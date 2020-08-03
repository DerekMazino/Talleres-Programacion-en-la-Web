$(document).ready(iniciarEventos);
function iniciarEventos(){
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let regiones = json;
        let departamentos=[];
        let html='';
        regiones.forEach(element => {
            /* html+='<option>'+element.departamento+'</option>'; */
            departamentos.push(element.departamento)
        });
        sinRepetidos=departamentos.unique();
        sinRepetidos.forEach(element =>{
            html+='<option>'+element+'</option>';
        });
        document.getElementById('departamento').innerHTML=html;
    });
    

}
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

    