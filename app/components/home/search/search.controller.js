/**
 * Created by Abbes on 29/10/2016.
 */
angular
    .module("eduKup")
    .controller("SearchController", SearchController);

SearchController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location"];
function SearchController($rootScope, $scope, uiGmapGoogleMapApi, $location) {
    $scope.goSearch = function () {
        $location.url("/advanced-search");
    }


    $scope.getCurrentLocalisation = function () {
        $scope.loading = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.$apply(function () {
                    $scope.loading = false;
                });
                mysrclat = position.coords.latitude;
                mysrclong = position.coords.longitude;
                console.log(mysrclat);
                console.log(mysrclong);

                //
                var geocoder = new google.maps.Geocoder();             // create a geocoder object
                var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);    // turn coordinates into an object
                geocoder.geocode({'latLng': location}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {           // if geocode success
                        var add = results[0].formatted_address;
                        $scope.$apply(function () {
                            $scope.location = add;
                        });// if address found, pass to processing function
                        console.log(add);
                    }


                });

            });
        }

    }
}