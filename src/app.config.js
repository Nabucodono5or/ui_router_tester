function configState($stateProvider) {
    let home = {
        name: 'home',
        url: '/home',
        component: 'home'
    };

    let about = {
        name: 'about',
        url: '/about',
        component: 'about'
    }

    $stateProvider.state(home);
    $stateProvider.state(about);
}

export default configState