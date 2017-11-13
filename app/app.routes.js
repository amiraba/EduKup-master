/**
 * Created by Abbes on 17/08/2016.
 */
angular
    .module("eduKup")
    .config(config);

config.$inject = ['$urlRouterProvider', '$stateProvider', 'componentsUrl'];
function config($urlRouterProvider, $stateProvider, componentsUrl) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: componentsUrl + "/home/home.html",
            controller: "HomeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'eduKup',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + "/home/home.service.js",
                            componentsUrl + "/home/search/search.controller.js",
                            componentsUrl + "/home/home.controller.js"
                        ]
                    });
                }]
            }
        })
        .state('advanced-search', {
            url: "/advanced-search",
            templateUrl: componentsUrl + "/advancedSearch/advanced-search.html",
            controller: "AdvancedSearchController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'eduKup',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + "/advancedSearch/advanced-search.service.js",
                            componentsUrl + "/advancedSearch/advanced-search.controller.js"
                        ]
                    });
                }]
            }
        })
        .state('profile', {
            url: "/profile",
            templateUrl: componentsUrl + "/profile/profile.html",
            controller: "ProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'eduKup',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + "/profile/profile.service.js",
                            componentsUrl + "/profile/profile.controller.js"
                        ]
                    });
                }]
            }
        })


}