import KEYS from '../const/const';
var viewSliderInstaFeed = require('raw-loader!../views/sliderInstaFeed.html');

sliderInstaFeed.$inject = ['instagramService'];
export default function sliderInstaFeed(instagramService) {
    return {
        scope: {},
        restrict: "AE",
        template: viewSliderInstaFeed,
        controller: function($scope){

            instagramService.getMediaFromUserById({
                userId: KEYS.instagramUser,
                access_token: KEYS.instagramToken,
            }).then(function(_data){
                $scope.picturesArray = [];
                _data.data.data.forEach(function(elem){
                    $scope.picturesArray.push(elem);
                });
                _data.data.data.forEach(function(elem){
                    $scope.picturesArray.push(elem);
                });
                _data.data.data.forEach(function(elem){
                    $scope.picturesArray.push(elem);
                });
                $scope.pictures = $scope.picturesArray.slice(0,8);
                console.log(_data);
            });
        }
    };
}