
//Añadiendo un mapa que comience en determinadas coordenadas
const mymap = L.map('mapid', {
    center: [19.397628,  -99.14022299999999],
    zoom: 16,
    scrollWheelZoom: false
});

//Añadiendo un marcador al mapa
var marker = L.marker([19.413173, -99.161967]).addTo(mymap);

//Añadiendo street layer to map  con mapbox, para lo cual fue necesario pedir accessToken a mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY29jb3JhbGkiLCJhIjoiY2prZWcyY2d3MHRsbTNrcHE5eWs0b3FyMiJ9.ftq8vFCVHesfiKG5H7Lsuw'
}).addTo(mymap);

//Añadiendo popup para el evento click en cualquier parte del mapa que informe coordenadas
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

//Web-app credentials provided by FQ

var CLIENT_ID = 'QETGQGDUZHOQ3YADJY3XVMRUSEV3UMV11JFW5TNODYGJBFCQ';
var CLIENT_SECRET = 'EJ2E1RRCBZVKQG4RDFHDBGG1SGRQ5SVUQQN03LIQMYNS045N';

//Request to FQ for Venues search

const API_ENDPOINT = 'https://api.foursquare.com/v2/venues/search' +
'?client_id=CLIENT_ID' +
'&client_secret=CLIENT_SECRET' +
'&v=20180323' +
'&ll=LATLON' +
//Category 
'&query="cafe"' +
'&limit=4' ;


const tryingAPI = (anything) => {
document.getElementById("prueba").onclick("click", () => {
        fetch(API_ENDPOINT).then((response)=> {
            return response.json();
        }).then((data)=>{
            for (i in data) {
                let name =  response.venues[0].id
            }
            console.log('Conectada');
        }).catch((error)=> {
            console.log('No nos estamos entendiendo');
        })
      });
};

// //let foursquareMarker = L.layerGroup().addTo(mymap);


// //Agradecimientos a la API de FQ
// mymap.attributionControl.addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');



//Geolocation

  navigator.geolocation.getCurrentPosition(success, error);
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
  };
  
  function error(err) { 
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
 

