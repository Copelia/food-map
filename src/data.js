const url = 'https://raw.githubusercontent.com/Copelia/food-map/master/src/foursquare.json';

window.onload = () => {
    fetch(url)
      .then(response => (response.json())
        .then((data) => {
          getRestaurants(data);
        })
        .catch((error) => {
          console.log('Error: ', error);
        }))
    };
