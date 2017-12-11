myApp.service('DataService', ['$http', function($http) {
    var self = this;
    self.results = {data: []};

    // Assume type is either 'listings' or 'rentals'
    self.submitMessage = function (message) {
        console.log('here is your message',message);
        
        $http.post('/messages', message).then(function (response) {
            console.log(response);
            self.getMessages();
        });
    }

    self.getMessages = function() {
        $http.get('/messages').then(function (response) {
            self.results.data = response.data; // data is the array
        });
    }
}]);