'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import angular from 'angular';
import mainCtrl from './controllers/mainCtrl';
import instagramSearchDataService from './services/instagramSearchDataService';
import instagramService from './services/instagramFactory';
import sliderInstaFeed from './directives/sliderInstaFeed';

var app = angular.module('MaryTricks', [

]);

app.service('instagramSearchDataService', instagramSearchDataService);
app.factory('instagramService', instagramService);
app.controller('MainCtrl', mainCtrl);
app.directive('sliderInstaFeed', sliderInstaFeed);
app.config(function() {

});

