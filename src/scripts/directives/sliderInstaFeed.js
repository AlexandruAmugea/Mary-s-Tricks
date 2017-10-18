sliderInstaFeed.$inject = ['instagramService'];
export default function sliderInstaFeed(instagramService) {
    return {
        scope: {},
        restrict: "AE",
        template: '<ul class="slide-insta-feed"><li ng-repeat="pic in pictures">'
                    + '<img ng-src="{{pic.images.thumbnail.url}}" /></li>',
        controller: function($scope){
            var _access_token = '4291665520.1677ed0.719b87e8c64b45f6a3264d5e4fb29797';

            instagramService.getMediaFromUserById({
                userId:"4291665520",
                access_token:_access_token,
            }).then(function(_data){
                $scope.pictures = _data.data.data.slice(0,8);
            });
        }
    };
}