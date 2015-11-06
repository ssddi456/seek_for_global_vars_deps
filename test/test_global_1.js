var seeker = require('../index');
var fs = require('fs');

console.log( seeker( fs.readFileSync( __dirname + '/code/global_1.js', 'utf-8') )); 
console.log( seeker( fs.readFileSync( __dirname + '/../index.js', 'utf-8') )); 
console.log( seeker( fs.readFileSync( __dirname + '/../index.js', 'utf-8') )); 
console.log( seeker( fs.readFileSync( 'L://fix_transfer//static//js//easypay-iframe.js', 'utf-8') )); 