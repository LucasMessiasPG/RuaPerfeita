(function(){
    'use strict'

    angular
        .module('app')
        .service('PinService',PinService)

    PinService.$inject = ['$http','RuaPerfeita']
    function PinService(http,RuaPerfeita){
        this.add = add;
        var _error = _error,
            _url = RuaPerfeita.urlBase+'pin'

        /////////
        
        function add(pin){
            return http.post(_url+'create',pin)
                .then(function(response){
                    return response.data;
                })
        }
    }
    
})()