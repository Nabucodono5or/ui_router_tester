let aboutController = function AboutController() {
  var vm = this;
  vm.title = "Segundo componente";
  vm.users = [];

  vm.$onInit = function() {
    console.log(vm.texto);
  };

  // console.log(vm.texto);

  // activate();

  // function activate() {
  //   return getUsers();
  // }

  // function getUsers() {
  //   return vm.promiseObj.then(
  //     data => {
  //       console.log(data.data);
  //     },
  //     error => {
  //       console.log("Não carregou direito!");
  //     });
  // }
};

export default aboutController;
