'use strict';

let LivingThing = require('./LivingThing');

module.exports = class Eukaryota extends LivingThing{

  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph(newHeterotroph){
    if(typeof newHeterotroph !== 'boolean'){
      throw new TypeError('That is not a boolean');
    }
    this._heterotroph = newHeterotroph;
  }
  get autotroph(){
    if(this._heterotroph === true){
      return false;
    } else {
      return true;
    }
  }
  set autotroph(newAutotroph){
    if(typeof newAutotroph !== 'boolean'){
      throw new TypeError('This is not a boolean');
    }
    if(newAutotroph === true){
      this._heterotroph = false;
    } else {
      this._heterotroph = true
    }
  }
};