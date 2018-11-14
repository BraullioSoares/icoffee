angular.module('iCoffeeApp').component('contentHeader', {
    bindings: {
        name: '@',
        small: '@'
    },
    template: `
    <section class="content-header">
        <h1>{{ $ctrl.name }}</h1> <small>{{ $ctrl.small }}</small>
    </section>
    `
})