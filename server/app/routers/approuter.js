module.exports = function(router) {
    //var router = app.router;

    //router.use(function (req, res, next) {
        
    //    console.log('Something is happening');
    //    next();

    //});
    
    //router.get('/',
    //function (req, res) {
    //    res.json({ message: 'hooray! welcome to our API!' });
    //});

    router.use(function (req, res, next) {
        
        console.log('Something is happening');
        next();

    });
    
    router.get('/',
        function (req, res) {
            res.json({ message: 'hooray! welcome to our API!' });
        });
}