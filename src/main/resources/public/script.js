var openVpnWeb = angular.module("openvpn-web", []);

openVpnWeb.controller("StatusClientsController", ["$scope", "$http", function($scope, $http){
    $scope.clients = [];

    (function main(){
        updateClients();

    })();

    function updateClients(){
        $http.get("/status/clients").then(function(response){
            $scope.clients = response.data;

        }, function(response){
            console.log(response);
        })
    }
}]);