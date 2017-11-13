/**
 * Created by Abbes on 29/08/2016.
 */
angular
    .module("eduKup")
    .factory("HomeService", HomeService);

HomeService.$inject = ["$resource", "BASE_URL"];
function HomeService($resource, BASE_URL) {
    var service = {};

    service.GetRegions = GetRegions;
    service.SearchVeterinary = SearchVeterinary;


    return service;

    function GetRegions() {
        return $resource(BASE_URL + '/getRecord', {
            post: {
                method: "POST",
                headers: {

                    'Content-Type': 'application/json'
                }
            }


        });
    }

    function SearchVeterinary() {
        return $resource(BASE_URL + '/getRecordsBySearch', {
            post: {
                method: "POST",
                headers: {

                    'Content-Type': 'application/json'
                }
            }


        });
    }
}