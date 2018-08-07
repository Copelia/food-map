//Añadiendo un mapa que comience en determinadas coordenadas
const mymap = L.map('mapid', {
    center: [19.43,  -99.13],
    zoom: 16,
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
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY29jb3JhbGkiLCJhIjoiY2prZWcyY2d3MHRsbTNrcHE5eWs0b3FyMiJ9.ftq8vFCVHesfiKG5H7Lsuw'
}).addTo(mymap);

// //Agradecimientos a la API de FQ
mymap.attributionControl.addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');

 
const container = document.getElementById('result');

const getRestaurants = (data) => {
  document.getElementById('btn-chinese').addEventListener('click' , (event) => {
    let result = '';
      let objectVenue = data.response.venues;
      //console.log(objectVenue);
for (i = 0; i < objectVenue.length; i++ ) {
    console.log(objectVenue[i].location.address);
    console.log(objectVenue[i].name);
    result += `<div class="card">
               <p>Nombre:${objectVenue[i].name}</p>
               <p>Dirección:${objectVenue[i].location.address}</p>
               <button class="btn btn-warning">Ver más</button>
               </div>`
}
        container.innerHTML = result;
    
});

};






// result += `<div class="modal" id="myModal">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-body">
//         <p>Nombre:${objectVenue[i].name}</p>
// <p>Dirección:${objectVenue[i].location.address}</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-dismiss="modal">Regresa</button>
//       </div>
//     </div>
//   </div>
// </div>`