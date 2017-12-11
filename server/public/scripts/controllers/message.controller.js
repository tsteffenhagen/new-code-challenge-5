myApp.controller('MessageController', function (DataService) {
    var self = this;

    self.message = {
        name: '',
        message: ''
    }
    self.messageData = DataService.results;

    self.submitMessage = function(message) {
        DataService.submitMessage(message);
    }

    DataService.getMessages();
});