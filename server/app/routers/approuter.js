var path = require('path');

module.exports = function (router) {

    router.use(function (req, res, next) {
        
        console.log('Information requested');
        next();

    });
    
    router.get('/',
        function (req, res) {
            res.json({ message: 'hooray! welcome to our API!' });
            
    });
    
    // handles front end routes
	router.get('*',
		function(req, res) {
			//res.sendFile('./public/views/index.html');
            res.sendFile(path.join(__dirname, '../../../index.html'));
		    console.log('Sent the index');
		});
}