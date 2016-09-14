'use strict';
let Animal = require('./Animal');

module.exports = class Bilateral extends Animal{
  constructor(name, body){
    super(name, 'bilateral');
    this._body = body;
  }
  get body(){
    return this._body;
  }
  set body(body){
    if(typeof body !== 'string'){
      throw new TypeError('This value is not a string');
    }
    this._body = body;
  }
};