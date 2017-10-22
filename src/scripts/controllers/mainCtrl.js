mainCtrl.$inject = ['$scope', 'instagramService'];

export default function mainCtrl($scope, instagramService) {
    $scope.$on('$routeChangeStart', function(next, current) { 
        var path = current.$$route.originalPath;
        if(path === '/contact') {
            document.getElementsByTagName('body')[0].classList.add('contact');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('contact');
        }

        var menuItems = document.querySelectorAll('.desktop-nav ul li a');

        function removeClasses(elements) {
            elements.forEach(function(elem) {
                elem.classList.remove('active');
            })
        }
        
        if(path === '/') {
            removeClasses(menuItems);
            menuItems[0].classList.add('active');
        } else if(path === '/portfolio') {
            removeClasses(menuItems);
            menuItems[1].classList.add('active');
        } else if(path === '/contact'){
            removeClasses(menuItems);
            menuItems[2].classList.add('active');
        }

      });
}
