# mockery-partial
mockery partial is a fork of the good mockery package with the ability to mock only some methods and keep the functionality of the others. instead of mocking everything so it includes all the functionality of mockery with one new ability ``registerPartial``

### usage example

```js

var fsMock = {
    stat: function (path, cb) { 
        cb('yoopi'); 
    }
};
// keep in mind that you can still use other fs modules functionality such as readFileSync or everything else 

mockeryPartial.enable();
mockeryPartial.registerPartial('fs',fsMock);

var fs = require('fs');
fs.stat('a',(res)=>{
 console.log(res)
})

//output -> yoopi


```

