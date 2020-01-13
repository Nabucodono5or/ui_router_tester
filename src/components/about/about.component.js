import template from "about.html";
import controller from "./about.controller";

let aboutComponent = {
  template,
  bindigs: {
    promiseObj: '='
  },
  controller,
  controllerAs: "vm"
};

export default aboutComponent;
