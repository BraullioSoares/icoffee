(function() {

    angular.module('iCoffeeApp').controller('BillingCycleCtrl', [
        '$http',
        'consts',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, consts, msgs, tabs) {
        const vm = this
        const url = `${consts.apiUrl}/billingCycles`

        vm.refresh = function() {
            $http.get(url).then(function(response) {
                vm.billingCycle = {credits: [{}], debts: [{}]}
                vm.billingCycles = response.data
                tabs.show(vm, {tabList: true, tabCreate: true})
            })
        }

        vm.create = function() {
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }

        vm.showTabUpdate = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabUpdate: true})
        }

        vm.showTabDelete = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabDelete: true})
        }

        vm.update = function() {
            const updateUrl = `${consts.apiUrl}/billingCycles/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }

        vm.delete = function() {
            const deleteUrl = `${consts.apiUrl}/billingCycles/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Efetuada com Sucesso!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }


        vm.refresh()
    }
}())