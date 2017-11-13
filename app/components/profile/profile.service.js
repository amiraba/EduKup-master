/**
 * Created by Abbes on 30/10/2016.
 */
angular
    .module("eduKup")
    .factory("ProfileService", ProfileService);

ProfileService.$inject = ["$resource", "BASE_URL"];
function ProfileService($resource, BASE_URL) {
    var service = {};
    return service;
}