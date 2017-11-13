/**
 * Created by Abbes on 29/08/2016.
 */
angular
    .module("veterApp")
    .controller("HeaderController", HeaderController);

HeaderController.$inject = ['$scope', '$location', '$rootScope', 'toaster', 'SignInService'];
function HeaderController($scope, $location, $rootScope, toaster, SignInService) {

    $scope.search = {
        emmergency: false
    };
    $scope.info = {
        verify: false
    };

    $scope.sendInfo = function () {
        console.log($scope.info);
        //if response true
        $scope.info.verify = true;
        toaster.success("Information added sucess");
    };

    $scope.searchVeterinary = function () {
        console.log($scope.search.region, "   ", $scope.search.emmergency);
        $location.url("/home?name=" + $scope.search.name + "&region=" + $scope.search.region + "&emmergency=" + $scope.search.emmergency);

    };

    $scope.changeParamsHeader = function () {
        $scope.profile = "";
        if (localStorage.getItem("ob_Veterinary") != "null") {
            $scope.profile = "veterinary";

            return;
        }
        if (localStorage.getItem("ob_User") != "null") {
            $scope.profile = "user";

            return;
        }


    };
    $rootScope.$on('$locationChangeSuccess', function (e) {
        $scope.changeParamsHeader();
    });

    $scope.deconnect = function () {
        $scope.profile = "";
        toaster.success("Deconnexion sucess");
        if (localStorage.getItem("ob_Veterinary") != JSON.stringify(null)) {
            localStorage.setItem("ob_Veterinary", null);
        }
        if (localStorage.getItem("ob_User") != JSON.stringify(null)) {
            localStorage.setItem("ob_User", null);
        }
        $location.url("/home");
    };

    $scope.sig = {};

    $scope.signin = function () {
        console.log("Hello");
        //Connect User
        //if not connect Veterinary
        //if not error
        var fields = [];
        //email
        fields.push({field: "email", value: $scope.sig.email, operator: "=", condition: "AND"});
        //password
        fields.push({field: "password", value: "8qtuRFL1L414uxH1vvemWP1v5oSNFZNg", operator: "="});
        SignInService.Connect().save({
            "token": localStorage.getItem("token"),
            "objectId": "ob_User",
            "searchColumnValue": JSON.stringify(fields),
            "returnFields": "",
            "batchSize": "",
            "cursorPosition": ""

        }, function (res) {
            var response = JSON.parse(res.d);
            if (response.responseData == null) {
                //Connect Veterinary
                SignInService.Connect().save({
                    "token": localStorage.getItem("token"),
                    "objectId": "ob_Veterinary",
                    "searchColumnValue": JSON.stringify(fields),
                    "returnFields": "",
                    "batchSize": "",
                    "cursorPosition": ""

                }, function (res) {
                    var response = JSON.parse(res.d);
                    if (response.responseData == null) {
                        toaster.error("Verify login ou/et password");
                        //Mock
                        var veterinayMock = {
                            "responseData": {
                                "data": [{
                                    "address": "16 rue",
                                    "birth_date": "1990-10-15T00:00:00",
                                    "email": "bhamoudakh@gmail.com",
                                    "first_name": "Khalil",
                                    "id": 1,
                                    "last_name": "Ben Hamouda",
                                    "password": "bIcDR92ajUyColSbzkivXA==",
                                    "region": "Tunis",
                                    "sex": true,
                                    "Created by": "650a333596bbf348",
                                    "Created Date": "2016-10-18T10:35:48",
                                    "Modified Date": "2016-10-18T14:05:27",
                                    "Modified by": "650a333596bbf348",
                                    "Owner": null,
                                    "af_row_id": "a3928c27b6380be0"
                                }]
                            },
                            "responseInfo": {"EOF": true, "CurrentCursor": 1, "TotalRecords": 1, "ReturnedSize": 1},
                            "responseDesc": "null",
                            "responseCode": 200
                        };
                        //localStorage.setItem("ob_Veterinary", JSON.stringify(response.responseData));
                        localStorage.setItem("ob_User", JSON.stringify(veterinayMock));
                        $scope.changeParamsHeader();
                        $location.url("/home");

                    } else {
                        //Connect Veterinary Sucess
                        //localStorage.setItem("ob_Veterinary", JSON.stringify(response.responseData));
                        localStorage.setItem("ob_Veterinary", JSON.stringify(veterinayMock));
                        toaster.success("Connect Veterinary sucess");
                        $location.url("/home");
                    }
                })
            } else {
                //Connect User Successs
                localStorage.setItem("ob_User", JSON.stringify(response.responseData));
                toaster.success("Connect User sucess");
                $location.url("/home");
            }
        });
    }


}