var map;
function initMap() {
  var haputale = {lat: 6.768863, lng: 80.958574};
  var temple1 = {lat: 7.221856, lng: 80.408478};
  var temple2 = {lat: 8.964776, lng: 80.525568};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 7.873054, lng: 80.771797},
        zoom: 7
    });

    var haputaleContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Haputale Town Hall</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Relief Items</b>' +
      '<ul><li>Item 1</li>'+
      '<li>Item 2</li>'+
      '<li>Item 3</li></ul>'+
      '</p>'+
      '</div>'+
      '</div>';

      var haputaleinfowindow = new google.maps.InfoWindow({
        content: haputaleContentString
      });
    
      var marker1 = new google.maps.Marker({
        position: haputale,
        map: map,
        title: 'Haputale Town Hall'
      });
      marker1.addListener('click', function() {
        haputaleinfowindow.open(map, marker1);
      });

      var temple1ContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Sri Siddhartha Bawana Madyasthaanaya</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Relief Items</b>' +
      '<ul><li>Item 1</li>'+
      '<li>Item 2</li>'+
      '<li>Item 3</li></ul>'+
      '</p>'+
      '</div>'+
      '</div>';

      var temple1infowindow = new google.maps.InfoWindow({
        content: temple1ContentString
      });
    
      var marker2 = new google.maps.Marker({
        position: temple1,
        map: map,
        title: 'Sri Siddhartha Bawana Madyasthaanaya'
      });
      marker2.addListener('click', function() {
        temple1infowindow.open(map, marker2);
      });

      var temple2ContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Krishna Temple</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Relief Items</b>' +
      '<ul><li>Item 1</li>'+
      '<li>Item 2</li>'+
      '<li>Item 3</li></ul>'+
      '</p>'+
      '</div>'+
      '</div>';

      var temple2infowindow = new google.maps.InfoWindow({
        content: temple2ContentString
      });
    
      var marker3 = new google.maps.Marker({
        position: temple2,
        map: map,
        title: 'Krishna Temple'
      });
      marker3.addListener('click', function() {
        temple2infowindow.open(map, marker3);
      });

      var citymap = {
        mullaitivu: {
          center: {lat: 9.199583, lng: 80.58828},
          population: 30000
        },
        kandy: {
          center: {lat: 7.283259, lng: 80.624926},
          population: 50000
        },
        moneragala: {
          center: {lat: 6.756323, lng: 81.251883},
          population: 80000
        }
      };
      var x = 1

    for (var city in citymap) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100,
        center_id: x
      });

      (function(cityCircle) {
        google.maps.event.addListener(cityCircle, 'click', function(evt) {
            //console.log('click event');
            console.log(cityCircle.center_id);
            changeData(cityCircle.center_id);
        })
    })(cityCircle)
    x++;
    }


    function changeData(content_id){
      // alert(content_id);

      if(content_id === 1){
        document.getElementById('title').innerHTML = 'Mullaitivu';
        document.getElementById('p1').innerHTML = 'Paragraph 1 about disaster in Mullaitivu';
        document.getElementById('p2').innerHTML = 'Paragraph 2 about disaster in Mullaitivu';
        document.getElementById('image1src').src="assets/img/image2.jpg";
        document.getElementById('image1href').href="assets/img/image2.jpg";
      }else if(content_id === 2){
        document.getElementById('title').innerHTML = 'Kandy';
        document.getElementById('p1').innerHTML = 'Paragraph 1 about disaster in Kandy';
        document.getElementById('p2').innerHTML = 'Paragraph 2 about disaster in Kandy';
        document.getElementById('image1src').src="assets/img/image3.jpg";
        document.getElementById('image1href').href="assets/img/image3.jpg";
      } else if(content_id === 3){
        document.getElementById('title').innerHTML = 'Moneragala';
        document.getElementById('p1').innerHTML = 'Paragraph 1 about disaster in Moneragala';
        document.getElementById('p2').innerHTML = 'Paragraph 2 about disaster in Moneragala';
        document.getElementById('image1src').src="assets/img/image4.jpg";
        document.getElementById('image1href').href="assets/img/image4.jpg";
      }
    }


}







