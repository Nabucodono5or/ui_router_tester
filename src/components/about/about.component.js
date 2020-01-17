import template from "about.html";
import controller from "./about.controller";

let aboutComponent = {
  template,
  bindings: {
    promiseObj: '<',
  },
  controller,
  controllerAs: "vm"
};

export default aboutComponent;
