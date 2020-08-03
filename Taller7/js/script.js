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
            html+='<option>'+element.departamento+'</option>';
        });
        document.getElementById('departamento').innerHTML=html;
    });
    

}

    