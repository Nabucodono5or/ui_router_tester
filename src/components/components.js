import angular from "angular";
import homeModule from "./home/home";
import aboutModule from "./about/about";

let componentsModule = angular.module("componentsModule", [homeModule, aboutModule]).name;

export default componentsModule;
