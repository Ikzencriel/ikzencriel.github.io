/* ----- Google Map ----- */
if ($("#map").length) {
    function initialize() {

        geocoder = new google.maps.Geocoder();
        var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: new google.maps.LatLng(42.295462979190035, -85.58312052950976)
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            title: "448 N Burdick St, Kalamazoo, MI 49007",
            //icon: 'images/locating.png', if u want custom
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}
