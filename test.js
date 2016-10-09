'use strict'

var mockeryPartial =  require('./lib/mockery-partial');

 //mocksipen.disable();

var fsMock = {
    stat: function (path, cb) { 
        cb('yoopi'); 
    }
};
mockeryPartial.enable();
mockeryPartial.registerPartial('fs',fsMock);

var fs = require('fs');
fs.stat('a',(res)=>{
 console.log(res)
})
let bla =fs.readFileSync('README.md','utf8');

 mockeryPartial.deregisterMock('fs');
var fs2 = require('fs');

fs2.stat('a',(res)=>{
 console.log(res)
})

