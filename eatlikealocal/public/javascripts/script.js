function activatePlacesSearch() {
  var input = document.getElementById("streetname");
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var place = autocomplete.getPlace();
    console.log(place);
  });
}

function initialised() {}
google.maps.event.addDomListener(window, "load", activatePlacesSearch);
