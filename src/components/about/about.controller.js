let aboutController = function AboutController() {
  var vm = this;
  vm.title = "Segundo componente";
  vm.users = [];
  
  activate();

  function activate() {
    return getUsers();
  }

  function getUsers() {
    return vm.promiseObj.then(
      data => {
        console.log(data.data);
      },
      error => {
        console.log("Não carregou direito!");
      });
  }
};

export default aboutController;
