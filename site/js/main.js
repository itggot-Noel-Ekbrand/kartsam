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
        var uluru3 = {lat: 50.052753, lng:14.356375};
        var marker = new google.maps.Marker({
          position: uluru3,
          map: map
        });
        var uluru4 = {lat: 50.062160, lng:14.309191};
        var marker = new google.maps.Marker({
          position: uluru4,
          map: map
        });
      }
