var path = require('path');

module.exports = function(router) {

    router.use(function(request, response, next) {

        console.log('Receiving a request for data from: ' + request.originalUrl);
        next();

    });

    router.get('/',
        function(request, response) {
            console.log('Sending data...');
            response.json({ message : 'hooray! welcome to our API!' });
            console.log('Data sent!');

        });
};