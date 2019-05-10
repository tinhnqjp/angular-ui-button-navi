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
  }])
  .directive('buttonEdit', ['$state', function ($state) {
    var directive = {
      restrict: 'E',
      scope: {
        nohistory: '@',
        back: '@',
        noback: '@',
        notpre: '=',
        state: '@',
        params: '='
      },
      templateUrl: 'template/button-edit.client.view.html',
      link: function (scope) {
        scope.handleBackScreen = function () {
            if (scope.nohistory) {
              $state.go(scope.back, scope.params);
            } else if ($state.previous.state.name) {
              if (scope.state === $state.previous.state.name || scope.noback === $state.previous.state.name) {
                $state.go(scope.back, scope.params);
              } else {
                $state.go($state.previous.state.name, ($state.previous.state.name) ? $state.previous.params : {});
              }
            } else if (scope.back) {
              $state.go(scope.back, scope.params);
            }
          };
      }
    };
    return directive;
  }])
  .directive('buttonSave', ['$state', function ($state) {
    var directive = {
      restrict: 'E',
      scope: {
        back: '@',
        params: '='
      },
      templateUrl: 'template/button-save.client.view.html',
      link: function (scope) {
        scope.handleBackScreen = function () {
            if ($state.previous.state.name) {
              $state.go($state.previous.state.name, ($state.previous.state.name) ? $state.previous.params : {});
            } else if (scope.back) {
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
  $templateCache.put('template/button-edit.client.view.html',
    '<button type="button" ng-click="handleBackScreen()" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i>戻る</button><button class="btn btn-primary btn-sm" ui-sref="{{state}}({{params}})" title="編集"><i class="fa fa-edit"></i>編集</button>'
  );
  $templateCache.put('template/button-save.client.view.html',
    '<button type="button" ng-click="handleBackScreen()" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i>戻る</button><button type="submit" class="btn btn-success btn-sm"><i class="fa fa-save"></i>保存</button>'
  );

}]);


if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = 'ui.button-navi';
}
