import Ember from 'ember';

export default Ember.Component.extend({
    insertMap: function () {
        var container = this.$('.map-canvas')[0];
        var options = {
            center: new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
            ),
            zoom: this.get('zoom')
        };
        var map = new window.google.maps.Map(container, options);
        let marker;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                
                map.setCenter(new google.maps.LatLng(latitude, longitude));
                map.setZoom(20);
                if (!marker) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
                        map: map
                    });
                }
                //Ember.$('#lonlat')[0].value = longitude + " " + latitude;
                
            });
        }

        map.addListener('click', function (e) {
            if (marker) {
                marker.setMap(null);
            }
            marker = new google.maps.Marker({
                position: e.latLng,
                map: map,
                title: e.LatLng
            });
            //Ember.$('#lonlat')[0].value = e.latLng.lng() + " " + e.latLng.lat();
        });

    }.on('didInsertElement'),

    /*actions: {
        addMarker: function (map, latlng) {
            new google.maps.Marker({
                position: myLatLng,
                map: map
            });
        }
    }*/
});