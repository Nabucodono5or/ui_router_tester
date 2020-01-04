import angular from "angular";
import appComponent from "./app.component";
import componentsModule from "./components/components";

angular.module("app", [componentsModule]).component("app", appComponent).name;
