let latitute =0;
let longitude =0;


const fetchData = function() {
  // e.preventDefault();
  // const keyWord = $('#query').val();
  $.ajax('http://api.open-notify.org/iss-now.json').done(function(info) {
    console.log(info);
    let dt = new Date();
    var time = dt;
    $('#time').text(time);
    latitute = info['iss_position']['latitude'];
    longitude = info['iss_position']['longitude'];
    console.log('this happen 1st');
    // console.log(lat);
    // console.log(lon);


    $('#lat').text(latitute);
    $('#lon').text(longitude);
    initialize();

  }).fail(function() {
    alert("Something is wrong!");
  })

}

function initialize() {
  let myLatLng={lat:0,lng:0};
  myLatLng.lat=+latitute;
  myLatLng.lng=+longitude;
  console.log('map1'+myLatLng.lat);
  console.log('map1'+myLatLng.lng);
  console.log('This happen 2nd');
  let mapOptions = {
          zoom: 8,
          center: myLatLng,
    };
      console.log("MAP"+myLatLng.lat+myLatLng.lng);
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({
            position: myLatLng,
            map: map
          });

}

$(document).ready(function() {


  $('#search').on('click', setInterval(fetchData, 1000));

  // $('#search').on('click', function(){
  //   fetchData();

  // });







  // $('#stop').on('click',clearInterval(setInterval(fetchData, 500)));

})
