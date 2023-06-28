function initMap() {
  var location = {lat: -6.1754, lng:  106.8272};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
