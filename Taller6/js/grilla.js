$(document).ready(inicializarEventos);
function inicializarEventos(){
    traerDatos();
}

/* document.querySelector('#boton').addEventListener('click', traerDatos); */

function traerDatos() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let tabla = document.querySelector('#table');
            tabla.innerHTML = '';

            for (let item of datos) {
                tabla.innerHTML += `
                <tr>
                <th>${item.id}</th>
                <th>${item.name}</th>
                <th>${item.username}</th>
                <th>${item.email}</th>
                <th>${item.address.street}</th>
                <th>${item.address.suite}</th>
                <th>${item.address.city}</th>
                <th>${item.address.zipcode}</th>
                <th>${item.address.geo.lat}</th>
                <th>${item.address.geo.lng}</th>
                <th>${item.phone}</th>
                <th>${item.website}</th>
                <th>${item.company.name}</th>
                <th>${item.company.catchPhrase}</th>
                <th>${item.company.bs}</th>
                </tr>`
            }

        }
    }
}

