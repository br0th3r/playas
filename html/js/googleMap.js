var scope;

/*$('#placeMap').ready(function () {
  scope = angular.element('#myBeaconDetailController').scope();

  //console.log("placeMap: " + JSON.stringify(scope.places.selected));     

  //initOlMap("placeMap", scope.places.selected.place.coordinates.latitude, scope.places.selected.place.coordinates.longitude, scope.places.selected.place.name);  
});*/

$('#editPlace').on('shown.bs.modal', function () {
  //console.log("EditPlace");
  scope = angular.element('#placesController').scope();

  loadMap(); 
       
});

$('#editPlace').on('hidden.bs.modal', function () {
  
  scope.restore();

});

function loadMap()
{
  initSearchMap("mapSearch", scope.places.selected.place.coordinates.latitude, scope.places.selected.place.coordinates.longitude, scope.places.selected.place.name);
}

function initSearchMap(divId, latitude, longitude, ptitle) {
  //console.log("initSearchMap");
  var myLatLng = new google.maps.LatLng(latitude, longitude);
  var map = new google.maps.Map(document.getElementById(divId), {
    center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: ptitle
  });

  marker.setMap(map);

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-6, 106.6),
      new google.maps.LatLng(-6.3, 107)
  );

  var input = document.getElementById("searchPlace");
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  //marker = new google.maps.Marker({map: map});

  google.maps.event.addListener(autocomplete, "place_changed", function()
  {
      var place = autocomplete.getPlace();

      //console.log("### --------------------------------------- ###");
      //console.log("Autocomplete place: " + JSON.stringify(place));
      //console.log("### --------------------------------------- ###");

      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(15);
      }

      marker.setPosition(place.geometry.location);

      scope.setPlaceInfo(place);
  });

  /*google.maps.event.addListener(map, "click", function(event)
  {
      console.log("click: " + JSON.stringify(event));
      marker.setPosition(event.latLng);
      map.setCenter(marker.getPosition());
  });*/
  
}

function initOnlyMap(divId, latitude, longitude, ptitle) {
  //console.log("initOnlyMap: " + divId + " - " + latitude + " - " + longitude + " - " + ptitle);
  var myLatLng = new google.maps.LatLng(latitude, longitude);
  var map = new google.maps.Map(document.getElementById(divId), {
    center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  map.setTilt(45);

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: ptitle
  });

  marker.setMap(map);

  return map;
}