var map;
var pos_x = 36.7509;
var pos_y = -3.8655;
function initMap() {
    var myOptions = {
        zoom:20,
        center:new google.maps.LatLng(pos_x, pos_y),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    
//    map = new google.maps.Map(document.getElementById('map'), {
//      center: {lat: -34.397, lng: 150.644},
//      zoom: 8
//    });
    
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({
        map: map,position: new google.maps.LatLng(pos_x, pos_y)
    });
    infowindow = new google.maps.InfoWindow({
        content:'<strong>Playas</strong><br>asdfasdfasdf<br>asdfasdf asdfasfd<br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);

    var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(pos_x, pos_y),
        draggable: true
    });

    google.maps.event.addListener(myMarker, 'dragend', function (evt) {
        document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
    });

    google.maps.event.addListener(myMarker, 'dragstart', function (evt) {
        document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });

    map.setCenter(myMarker.position);
    myMarker.setMap(map);

}
