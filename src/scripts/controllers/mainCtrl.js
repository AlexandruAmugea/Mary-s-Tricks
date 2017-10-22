mainCtrl.$inject = ['$scope', 'instagramService'];

export default function mainCtrl($scope, instagramService) {
    $scope.$on('$routeChangeStart', function(next, current) { 
        if(current.$$route.originalPath === '/contact') {
            document.getElementsByTagName('body')[0].classList.add('contact');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('contact');
        }
      });
}
