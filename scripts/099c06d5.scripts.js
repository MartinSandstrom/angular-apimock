"use strict";angular.module("angularApimockApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","apiMock"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/demo-simple",{templateUrl:"views/demo-simple.html"}).otherwise({redirectTo:"/"})}]),angular.module("angularApimockApp").controller("MainCtrl",function(){}),angular.module("angularApimockApp").controller("DemoSimpleCtrl",["$scope","$http",function(a,b){a.players=[],a.alerts=[],a.getHighscore=function(){b.get("/api/scores/top").success(function(b){a.players=b}).error(function(){var b="No connection :( Now add ?apimock=true to the browser addressbar and try again ;)";a.alerts.push({type:"danger",text:b})})},a.closeAlert=function(b){a.alerts.splice(b,1)}}]);