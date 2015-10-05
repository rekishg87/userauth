/**
 * Created by Rekish on 10/5/2015.
 */

angular.module("SignupMod")
    .controller("SignupCtrl", ['$scope', '$http', function($scope, $http) {
        console.log("Signup Controller Initialized...")

        $scope.runSignup = function() {
            console.log("Signing Up " + $scope.name);

            // Submit To Sails Server
            $http.post('/signup', {
                name: $scope.name,
                email: $scope.email,
                password: $scope.password
            })
            .then(function onSuccess(response) {
                    window.location = '/user'
            })
            .catch(function onError(err) {
                    console.log("Error: " + err);
            })
        }
    }]);
