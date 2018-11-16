(function() {
    angular.module('iCoffeeApp').controller('OrdersCtrl', [
        '$http',
        '$location',
        'consts',
        'msgs',
        'tabs',
        OrdersController
    ])

    function OrdersController($http, $location, consts, msgs, tabs) {
        const vm = this
        const url = `${consts.apiUrl}/orders`
        

        vm.refresh = function() {
            const page = parseInt($location.search().page) || 1
            $http.get(`${url}?skip=${(page - 1) * 10}&liimit=10`).then(function(response) {
                vm.order = {address: [{}], order: [{}]}
                vm.orders = response.data
                vm.calculateValues()
                
                $http.get(`${url}/count`).then(function(response) {
                    vm.pages = Math.ceil(response.data.value / 10)
                    tabs.show(vm, {tabList: true, tabCreate: true})
                })
            })
        }

        vm.create = function() {
            $http.post(url, vm.order).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }

        vm.showTabUpdate = function(order) {
            vm.order = order
            vm.calculateValues()
            tabs.show(vm, {tabUpdate: true})
        }

        vm.showTabDelete = function(order) {
            vm.order = order
            vm.calculateValues()
            tabs.show(vm, {tabDelete: true})
        }

        vm.update = function() {
            const updateUrl = `${url}/${vm.order._id}`
            $http.put(updateUrl, vm.order).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }

        vm.delete = function() {
            const deleteUrl = `${url}/${vm.order._id}`
            $http.delete(deleteUrl, vm.order).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }
   

        vm.refresh()
    }
}())