(function() {
    angular.module('iCoffeeApp').controller('ClientsCtrl', [
        '$http',
        '$location',
        'consts',
        'msgs',
        'tabs',
        ClientsController
    ])

    function ClientsController($http, $location, consts, msgs, tabs) {
        const vm = this
        const url = `${consts.apiUrl}/clients`
        

        vm.refresh = function() {
            const page = parseInt($location.search().page) || 1
            $http.get(`${url}?skip=${(page - 1) * 10}&liimit=10`).then(function(response) {
                vm.client = {address: [{}], order: [{}]}
                vm.clients = response.data
            
                $http.get(`${url}/count`).then(function(response) {
                    vm.pages = Math.ceil(response.data.value / 10)
                    tabs.show(vm, {tabList: true, tabCreate: true})
                })
            })
        }

        vm.create = function() {
            $http.post(url, vm.client).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }

        vm.showTabUpdate = function(client) {
            vm.client = client
            tabs.show(vm, {tabUpdate: true})
        }

        vm.showTabDelete = function(client) {
            vm.client = client
            tabs.show(vm, {tabDelete: true})
        }

        vm.update = function() {
            const updateUrl = `${url}/${vm.client._id}`
            $http.put(updateUrl, vm.order).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }

        vm.delete = function() {
            const deleteUrl = `${url}/${vm.client._id}`
            $http.delete(deleteUrl, vm.client).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }

        vm.addAddress = function(index) {
            vm.client.address.splice(index + 1, 0, {})
        }

        vm.cloneAddress = function(index, {street, number, neighborhood}) {
            vm.client.address.splice(index + 1, 0, {street, number,neighborhood})
        }

        vm.deleteAddress = function(index) {
            if (vm.client.address.length > 1 ) {
                vm.client.address.splice(index, 1)
            }
        }

        vm.addOrder = function(index) {
            vm.client.order.splice(index + 1, 0, {})
        }

        vm.cloneOrder = function(index, {item,value}) {
            vm.client.order.splice(index + 1, 0, {item,value})
        }

        vm.deleteOrder = function(index) {
            if (vm.client.order.length > 1 ) {  
                vm.client.order.splice(index, 1)
            }
        }
   

        vm.refresh()
    }
}())