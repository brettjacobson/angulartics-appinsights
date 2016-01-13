(function(angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.azure.appinsights
   * Enables analytics support for Microsoft Azure Application Insights
   */
  angular
    .module('angulartics.azure.appinsights', ['angulartics'])
    .config(['$analyticsProvider', function($analyticsProvider) {
      angulartics.waitForVendorApi('appInsights', 100, function(appInsights) {
        $analyticsProvider.registerPageTrack(function(path) {
          appInsights.trackPageView(path);
        });

        $analyticsProvider.registerEventTrack(function(action, properties) {
          appInsights.trackEvent(action, properties);
        });

        $analyticsProvider.registerSetUsername(function(name) {

        });

        $analyticsProvider.registerSetUserProperties(function(properties) {
          //            TODO    need to hook in this properties bag into AppInsights Telemetry Initializer
          angular.forEach(properties, function(value, key) {
            // newrelic.setCustomAttribute(key, value);
          });
        });
      });
    }]);
})(angular);
