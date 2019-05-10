angular.module('ui.button-navi').directive('buttonBack', buttonBack);
buttonBack.$inject = ['$state'];
function buttonBack($state) {
    var directive = {
    restrict: 'E',
    scope: {
        back: '@',
        params: '='
    },
    templateUrl: '/template/button-back.client.view.html',
    link: function (scope) {
        scope.handleBackScreen = function () {
        if (scope.back) {
            $state.go(scope.back, scope.params);
        }
        };
    }
    };

    return directive;
}
