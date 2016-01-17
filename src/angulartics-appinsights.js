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
            appInsights.setAuthenticatedUserContext(name);
        });

        $analyticsProvider.registerSetUserProperties(function(properties) {
          appInsights.queue.push(function () {
            appInsights.context.addTelemetryInitializer(function (envelope) {
              var telemetryItem = envelope.data.baseData;
              telemetryItem.properties = telemetryItem.properties || {};
              angular.forEach(properties, function(value, key) {
                telemetryItem.properties[key] = value;
              });
            });
          });
        });
      });
    }]);
})(angular);
