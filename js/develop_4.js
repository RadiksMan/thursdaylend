function headerTub(){
    $('.header-tab-top-item').not(':first').hide();
    $('.header-tab-bottom-item').click(function(){
        $('.header-tab-bottom-item').removeClass('active').eq($(this).index()).addClass('active');
        $('.header-tab-top-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
}

function googleMap(){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("footer-contact-map-wrap"), myOptions);

        var contentString = '<div class="marker-test">'+googleText+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var image = 'images/footer-contact-marker.png';
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

    }
    initialize();
}



$(document).ready(function(){
     headerTub();
     googleMap();
});