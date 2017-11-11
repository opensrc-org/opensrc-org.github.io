const staticServer = require('static-server');

var server = new staticServer({
    rootPath : '.',
    port : 4242,
    templates : {
        index : 'index.html'
    }
});

server.start(function (err) {
    if(err)
    {
        console.log(err);
    }
    console.log('server has been started!!');
});