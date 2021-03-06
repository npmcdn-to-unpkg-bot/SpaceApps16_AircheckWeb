(function() {
  'use strict';

  angular.module('aircheck.app')
    .directive('tileControlLightbox', tileControlLightbox);

  tileControlLightbox.$inject = [];
  function tileControlLightbox() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        var tile = element.parents('.tile')[0];
        var dropdown = element.parents('.dropdown');

        element.on('click', function(){
          dropdown.trigger('click');
        });

        element.magnificPopup({
          items: {
            src: tile,
            type: 'inline'
          },
          closeBtnInside: false
        });

      }
    };
  }
})();
