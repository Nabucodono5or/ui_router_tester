function configState($stateProvider) {
  let home = {
    name: "home",
    url: "/home",
    component: "home"
  };

  let about = {
    name: "about",
    url: "/about",
    component: "about",
    resolve: {
      // promiseObj: ['$http', function($http) {
      //   return $http.get("https://jsonplaceholder.typicode.com/users");
      // }]
      texto: function () {
        return 'texto'
      }
    }
  };

  $stateProvider.state(home);
  $stateProvider.state(about);
}

export default configState;
