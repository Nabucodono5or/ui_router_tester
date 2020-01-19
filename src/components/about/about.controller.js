let aboutController = function AboutController() {
  var vm = this;
  vm.title = "Segundo componente";
  vm.users = [];
  vm.$onInit = onInit;

  ////////////////////////

  function onInit() {
    console.log(vm.texto);
    vm.users = getUsers();
  }

  function getUsers() {
    console.log(vm.promiseobj);
    return vm.promiseobj;
  }
};

export default aboutController;
