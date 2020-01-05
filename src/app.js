import angular from "angular";
import appComponent from "./app.component";
import componentsModule from "./components/components";
import configState from "./app.config";
import uiRoute from '@uirouter/angularjs';

angular
  .module("app", [componentsModule, uiRoute])
  .config(configState)
  .component("app", appComponent)
  .name;
