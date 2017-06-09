var map;

function initMap() {
    var myOptions = {
        zoom:zoom,
        center:new google.maps.LatLng(pos_x, pos_y),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    
      // Data for the markers consisting of a name, a LatLng and a zIndex for the
      // order in which these markers should display on top of each other.
      var url="details.html";
      var beaches = [
        ['Playa de Burriana', 36.7509, -3.8655, 5, 'yellow', url],
        ['Playa de Cabopino', 36.485,  -4.738, 5, 'green', url],
        ['Playa del Remero', 36.705,-3.493, 5, 'red', url],
        ['Playa Poniente de Almerimar', 36.706,-2.818, 5, 'yellow', url],
        ['Playa de la Vera', 37.223,-1.802, 5, 'green', url],
        ['Playa de El Palo', 36.719,-4.361, 5, 'green', url],
        ['Playa de las Negras', 36.880,-2.004, 5, 'yellow', url],
      ];


     function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          url: 'img/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          console.log("Beach: "+beach[0]+" ("+beach[1]+","+beach[2]+"):"+beach[3]);
          var im = image;
          im.url='img/'+beach[4]+'.png';
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: im,
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
            url: beach[5]
          });
          google.maps.event.addListener(marker, 'click', function() {
              window.location.href = this.url;
          });
        }
      }
    
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    
    /*
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
    */
    
    /*
    var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(pos_x, pos_y),
        draggable: true
    });
    
    google.maps.event.addListener(myMarker, 'dragend', function (evt) {
        document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
        console.log("POS: ("+evt.latLng.lat().toFixed(3)+","+evt.latLng.lng().toFixed(3)+")")
    });
    
    google.maps.event.addListener(myMarker, 'dragstart', function (evt) {
        document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });
    map.setCenter(myMarker.position);
    myMarker.setMap(map);
    */

    setMarkers(map);

}
