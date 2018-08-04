

// const marker 
// const data 
//Añadiendo un mapa que comience en determinadas coordenadas
const mymap = L.map('mapid', {
    center: [19.397628,  -99.14022299999999],
    zoom: 12,
    scrollWheelZoom: false
});

//Añadiendo un marcador al mapa
var marker = L.marker([19.413173, -99.161967]).addTo(mymap);

//Añadiendo capa de mapa con mapbox, para lo cual fue necesario pedir accessToken
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY29jb3JhbGkiLCJhIjoiY2prZWcyY2d3MHRsbTNrcHE5eWs0b3FyMiJ9.ftq8vFCVHesfiKG5H7Lsuw'
}).addTo(mymap);

//Añadiendo popup para el evento click en cualquier parte del mapa que informe coordenadas
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


