/**
 * Created by Abbes on 03/10/2016.
 */
angular
    .module("eduKup")
    .factory("AppService", AppService);
AppService.$inject = ["$resource", "BASE_URL"]
function AppService($resource, BASE_URL) {
    var service = {};
    
    return service;

}