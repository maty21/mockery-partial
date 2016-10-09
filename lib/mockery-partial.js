
'use strict'

const mockery = require('mockery');
const clone =require('clone');
class MockeryPartial  {
    constructor(){
      
            
    }
static registerPartial (originalModule,mockModule){
      let _original = require(originalModule);    
   //   let  props =  Object.getOwnPropertyNames(_original);
     let cloned  = clone(_original);	
         for(let prop in mockModule ){
            //if(mockModule[prop]){
                cloned[prop]=mockModule[prop];
           // }       
         }
      mockery.registerMock(originalModule,cloned);
    }
}

mockery.registerPartial =  MockeryPartial.registerPartial;
module.exports = mockery;
