//Añadiendo un mapa que comience en determinadas coordenadas
const mymap = L.map('mapid', {
    center: [19.43,  -99.13],
    zoom: 13,
    scrollWheelZoom: false
});

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

//Añadiendo street layer to map  con mapbox, para lo cual fue necesario pedir accessToken a mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY29jb3JhbGkiLCJhIjoiY2prZWcyY2d3MHRsbTNrcHE5eWs0b3FyMiJ9.ftq8vFCVHesfiKG5H7Lsuw'
}).addTo(mymap);

// //Agradecimientos a la API de FQ
mymap.attributionControl.addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');


let venuesList = [];
const container = document.getElementById('result');

const getRestaurants = (data) => {
    //Convirtiendo primer objeto en arreglo
  
  //console.log(foursquareData);
  //Recorriendo los objetos del objeto
  document.getElementById('btn-chinese').addEventListener('click' , (event) => {
    let result = '';
    let foursquareData = Object.keys(data);
    for (i = 0; i < foursquareData.length; i++) {
      let objectKeys = foursquareData[i];
      //console.log(objectKeys);
      let objectVenue = data.response.venues;
      //console.log(objectVenue);
      let arrVenueData = objectVenue.map((arrayElement) => {
          let venueName = arrayElement.name;
          console.log(venueName);
          let address = arrayElement.location.address;
          console.log(address);
      });

      result += `<div class="card">
      <p>Lugar: ${address}</p>
      <div>`
      ;}
 
  container.innerHTML = result; 

    });

};


