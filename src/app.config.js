function configState($stateProvider) {
    let home = {
        name: 'home',
        url: '/home',
        template: '<home></home>'
    };

    let about = {
        name: 'about',
        url: '/about',
        template: '<about></about>'
    }

    $stateProvider.state(home);
    $stateProvider.state(about);
}

export default configState