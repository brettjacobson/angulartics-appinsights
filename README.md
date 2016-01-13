# angulartics-appinsights
Microsoft Azure Application Insights plugin for Angulartics

## Install - Bower

```
bower install angulartics-appinsights
```

## Usage

Include the script provided by Azure for App Insights:

```
<script type="text/javascript">
  var appInsights=window.appInsights||function(config){
    function r(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s=u.createElement(o),i,f;for(s.src=config.url||"//az416426.vo.msecnd.net/scripts/a/ai.0.js",u.getElementsByTagName(o)[0].parentNode.appendChild(s),t.cookie=u.cookie,t.queue=[],i=["Event","Exception","Metric","PageView","Trace"];i.length;)r("track"+i.pop());return r("setAuthenticatedUserContext"),r("clearAuthenticatedUserContext"),config.disableExceptionTracking||(i="onerror",r("_"+i),f=e[i],e[i]=function(config,r,u,e,o){var s=f&&f(config,r,u,e,o);return s!==!0&&t["_"+i](config,r,u,e,o),s}),t
    }({
        instrumentationKey: "[your instrumentation key]"
    });

    window.appInsights=appInsights;
</script>
```

Include a reference to the script file (in addition to the angulartics script reference):

```
<script src="/bower_components/angulartics/dist/angulartics.min.js"></script>
<script src="/bower_components/angulartics-appinsights/dist/angulartics-appinsights.min.js"></script>
```

Then add `angulartics-appinsights` as a dependency for your app.

```
angular.module('myApp', ['angulartics', 'angulartics.azure.appinsights']);
```

That's all it takes to configure it.  Refer to the [Angulartics](http://angulartics.github.io/) project for further usage detail.

## Running the Example

To run the example:

Add your App Insights instrumentation key in place of [your instrumentation key],

Run `example/index.html` in a web server (We recommend using [live-server](https://github.com/tapio/live-server) from the root of the application).

Browse to `http://webserver/example/index.html`;

Clicking the Send Event button should send and event to App Insights.
