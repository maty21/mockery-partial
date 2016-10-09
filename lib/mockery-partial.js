
'use strict'

const mockery = require('mockery');

class MockeryPartial  {
    constructor(){
      
            
    }
static registerPartial (originalModule,mockModule){
      let _original = require(originalModule);    
      let  props =  Object.getOwnPropertyNames(_original);	
         for(let prop in _original ){
            if(!mockModule[prop]){
                mockModule[prop]=_original[prop];
            }       
         }
      mockery.registerMock(originalModule,mockModule);
    }
}

mockery.registerPartial =  MockeryPartial.registerPartial;
module.exports = mockery;
