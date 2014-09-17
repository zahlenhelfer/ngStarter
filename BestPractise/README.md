# Welcome to dcsfuerth/ngStarter/BestPractise

Here are our tips&tricks and best practises about AngularJS

## enable CORS

assuming that the REST backend allows CORS you can enabled CORS in an angularJS app by adding this source

	angular.module('YOUR_MODULE').config(['$httpProvider', '$logProvider',
    		function ($httpProvider, $logProvider) {

	      // CORS erlauben
      		$httpProvider.defaults.useXDomain = true;
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      		// Debug-Log ausschalten
      		$logProvider.debugEnabled(false);

      		// Content-Type für PATCH setzen
      		$httpProvider.defaults.headers.patch = {
        		'Content-Type': 'application/json;charset=utf-8'
      		};
    	}
	]);

## all line numbers in stacktraces are 9?

I guess you use Istanbul (code coverage tool). This is a side effect of Angular, disable Istanbul to see the real line numbers.
This can be done in karma/karma-unit.tpl.js

## something you defined in a module is unknown?

This happens if you declare the same module twice. The happens easily with copy & paste.

Make sure that ONLY once you have something like this in your code

    angular.module('myModuleName',[ ... ]);
    # two parameters, second parameter is the array of dependencies

all other references should look like this

    angular.module('myModuleName'); # only one parameter

## self-defined module XYZ is unknown? 

Make sure that the file in which the module is created (angular.module with two parameters - "creator file") is loaded *before* all files in which something is added to the module (angular.module with one parameter). If the loading is done automatically (as in our boilerplate template), then you should make sure, that the creator file comes before all other dependent file in the alphabetical order (eg. prefix an underscore if all other files start with a lowercase character)

	_feature.js  		# creator file
	feature.js    		# depends on module
	feature.spec.js 	# depends on module


## scope problems: a value written to the scope "disappears"

Believe me: It's still there, but it's in the wrong scope. This happens if you have multiple scopes (=> almost always) and **you store non-object values** in the scope (which is a bad idea)

So instead of

	scope.answerToAllQuestions = 42; 	
use

	scope.importantStuff = {answerToAllQuestions: 42;} 

and 99% of your scope problems will disappear.

## scope problems: watching a scope variable doesn't fire an event.

That's the same problem described in the entry above. So don't store basic data types in the scope. Put them inside a object and store the object in the scope.

## scope problems: a value written has no effect on the gui (data binding fails)

This happens if the scope data change happens in a different run loop. Most famous is the setTimeout. There are two solutions for that:

* Use a angular version of setTimeout: $timeout(...);  
* call $rootScope.apply(); afterwards

## new plugins install with bower are not found in the app

add the extensions to /build.config.js

**As always: Contributions are more than welcome! **