var dns = require('dns');

dns.lookup('www.google.com', function(err, address, family){
    if(err)
        console.log("error", err)
    else
        console.log("address",address)
});