/**
 * Created by Abbes on 29/10/2016.
 */
angular
    .module("eduKup")
    .controller("AdvancedSearchController", AdvancedSearchController);

AdvancedSearchController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location"];
function AdvancedSearchController($rootScope, $scope, uiGmapGoogleMapApi, $location) {

    var styleArray = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    $scope.map = {
        center: {latitude: 36.7994983, longitude: 10.1822465},
        zoom: 8,
        options: {
            
            styles: styleArray
        },
        markersEvents: {
            click: function (marker, eventName, model, arguments) {
                /* for (var i = 0; i < $scope.markers.length; i++) {
                 $scope.markers[i].options.windowOptions.show = false;
                 }
                 marker.model.options.windowOptions.show = true;
                 $scope.currentMarker = $scope.objects[marker.model.idKey];
                 console.log($scope.currentMarker); */
            }
        },


    };

    $scope.radius = 20;
    $scope.tarif = 200;

}