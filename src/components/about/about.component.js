import template from "about.html";
import controller from "./about.controller";

let aboutComponent = {
  template,
  controller,
  controllerAs: "vm",
  bindings: {
    promiseobj: '<',
    texto: '<'
  }
};

export default aboutComponent;
