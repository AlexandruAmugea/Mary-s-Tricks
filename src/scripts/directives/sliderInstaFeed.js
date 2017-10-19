import KEYS from '../const/const';

sliderInstaFeed.$inject = ['instagramService'];
export default function sliderInstaFeed(instagramService) {
    return {
        scope: {},
        restrict: "AE",
        template: '<ul class="slide-insta-feed"><li ng-repeat="pic in pictures track by $index">'
                    + '<img ng-src="{{pic.images.thumbnail.url}}" /></li></ul>',
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