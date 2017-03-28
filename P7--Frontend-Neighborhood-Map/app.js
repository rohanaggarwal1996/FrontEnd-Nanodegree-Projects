var Malls = [{
        title: 'The Pavillion Mall',
        loc: {
            lat: 30.916018,
            lng: 75.8406153
        },
        place_id: '53a2ff0d498e0cce0a8ab1a4',
        show: true,
        selected: false
    },
    {
        title: 'Silver Arc Mall',
        loc: {
            lat: 30.900543,
            lng: 75.829223
        },
        place_id: '4fddee6fe4b01dfec0041698',
        show: true,
        selected: false
    },
    {
        title: 'Westend Mall',
        loc: {
            lat: 30.8855621,
            lng: 75.78820929999999
        },
        place_id: '4da43e5463b5a35d20a4211a',
        show: true,
        selected: false
    },
    {
        title: 'MBD Neopolis Mall',
        loc: {
            lat: 30.8825474,
            lng: 75.7819542
        },
        place_id: '4d552c55a05c3704a41cb587',
        show: true,
        selected: false
    },
    {
        title: 'Flamez Mall',
        loc: {
            lat: 30.8941848,
            lng: 75.82390509999999
        },
        place_id: '4d8e0340d265236a585aff16',
        show: true,
        selected: false
    },
    {
        title: 'Omaxe Plaza',
        loc: {
            lat: 30.90354769999999,
            lng: 75.83328040000001
        },
        place_id: '4f23fb3ae4b01dc94b19cdf1',
        show: true,
        selected: false
    }
];

var styles = [{
    featureType: 'water',
    stylers: [{
        color: 'blue'
    }]
}, {
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [{
            color: 'red'
        },
        {
            weight: 6
        }
    ]
}, {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{
        color: '#e85113'
    }]
}, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
            color: '#efe9e4'
        },
        {
            lightness: -40
        }
    ]
}, {
    featureType: 'transit.station',
    stylers: [{
            weight: 9
        },
        {
            hue: '#e85113'
        }
    ]
}, {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{
        lightness: 100
    }]
}, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
        lightness: -100
    }]
}, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
            visibility: 'on'
        },
        {
            color: '#f0e4d3'
        }
    ]
}, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
            color: 'black'
        },
        {
            lightness: -25
        }
    ]
}];
var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { // displays the center position of the map where markers are placed
            lat: 30.900965,
            lng: 75.8572758
        },
        zoom: 16,
        styles: styles,
        mapTypeControl: false
    });
    ko.applyBindings(new viewmodel());
}

function googleError() {
    document.getElementById('map').innerHTML = "Unable To load Map Please See The Internet Connection Else Check The API ";
}

function viewmodel() {
    var bound = new google.maps.LatLngBounds();
    var defaultIcon = makeMarkerIcon('66c2ff'); // Create a "highlighted location" marker color for when the user// mouses over the marker.
    var highlightedIcon = makeMarkerIcon('ffff00');
    for (var j = 0; j < self.Malls.length; j++) {
        var marker = new google.maps.Marker({
            map: map,
            position: Malls[j].loc,
            title: Malls[j].title,
            icon: defaultIcon,
            animation: google.maps.Animation.DROP,
            id: Malls[j].place_id,
            show: ko.observable(true),
            selected: ko.observable(Malls[j].selected)
        });

        var lrgInfwindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', animation);
        marker.addListener('click', function() {
            popInWind(this, lrgInfwindow);
        });
        marker.addListener('click', function() {
            popInWind(this, lrgInfwindow);
        });
        self.markers.push(marker);

        function animation(markanim) {
            this.setAnimation(google.maps.Animation.BOUNCE); //sets the animation on the marker
            self.setTimeout(function() {
                markanim.setAnimation(0);
            }, 700); //puts the time barrier on the marker
            markanim = this;
        }
        bound.extend(marker.position);
        map.fitBounds(bound); //displays the map in a particular boundary when the map is loaded
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
    }

    this.showListings = ko.observable('');

    function showListings() { //calls the show listing and diplays the markers when clicked

        for (var i = 0; i < self.markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    this.display = function(marker) {
        popInWind(marker, lrgInfwindow);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(0);
        }, 700);
    };
    this.enteredText = ko.observable('');
    this.searchText = function() {
        lrgInfwindow.close();
        if (this.enteredText().length === 0) {
            this.search(true);
        } else { //will work for the text enetered in the serach box
            for (i = 0; i < self.markers.length; i++) {
                if (markers[i].title.toLowerCase().indexOf(this.enteredText().toLowerCase()) >= 0) {
                    markers[i].show(true);
                    markers[i].setVisible(true);
                } else {
                    self.markers[i].show(false);
                    self.markers[i].setVisible(false);
                }
            }
        }
        lrgInfwindow.close();
    };
    this.search = function(elem) {
        for (i = 0; i < self.markers.length; i++) {
            markers[i].show(elem);
            markers[i].setVisible(elem);
        }
    };
    this.hideListings = ko.observable('');

    function hideListings() { // hides the markers when the function is called
        for (var i = 0; i < self.markers.length; i++) {
            markers[i].setMap(this.false);
        }
    }

    function makeMarkerIcon(markerColor) { // the changes the marker apperance when clicked or moved
        var markerImg = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(20, 32),
            new google.maps.Point(0, 0),
            new google.maps.Point(11, 35),
            new google.maps.Size(20, 32));
        return markerImg;
    }

    function popInWind(marker, infwindo) {
        markers.forEach(function(info) {
            $.getJSON({ //ajax file is called
                url: "https://api.foursquare.com/v2/venues/" + info.id + '?client_id=YOUR CLIIENT ID&client_secret=YOUR CLIENT SECRET&v=YOUR VERSION', //this the foursquare key and secret id with version
                success: function(data) {
                    var result = data.response.venue;
                    info.likes = result.hasOwnProperty('likes') ? result.likes.summary : "Not Available";
                    var markerinfo = '<h2>' + marker.title + '</h2>' + "<h3>Likes:" + marker.likes;
                    infwindo.setContent(markerinfo);
                    infwindo.open(map, marker);
                    infwindo.addListener('closeclick', function() {
                        infwindo.marker = 0;
                    });
                },
                error: function(error) { //displays the error when foursquare link does not work
                    window.alert('Error Loading Foursquare Link');
                }
            });
        });
    }

}
