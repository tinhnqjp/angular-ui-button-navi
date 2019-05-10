angular.module('ui.button-navi', [])
  .directive('buttonBack', ['$state', function ($state) {
    var directive = {
      restrict: 'E',
      scope: {
        back: '@',
        params: '='
      },
      templateUrl: 'template/button-back.client.view.html',
      link: function (scope) {
        scope.handleBackScreen = function () {
          if (scope.back) {
            $state.go(scope.back, scope.params);
          }
        };
      }
    };

    return directive;
  }]);

angular.module('ui.button-navi').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('template/button-back.client.view.html',
    '<button type="button" ng-click="handleBackScreen()" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i>戻る</button>'
  );

}]);


if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = 'ui.button-navi';
}
