function initMap() {
        var uluru = {lat: 57.587351, lng:12.131671};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var uluru2 = {lat: 60.691812, lng:15.700126};
        var marker = new google.maps.Marker({
          position: uluru2,
          map: map
        });
      }
