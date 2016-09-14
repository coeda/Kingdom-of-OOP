'use strict';
let Eukaryota = require('./Eukaryota');

module.exports = class Animal extends Eukaryota{
  constructor(name, symmetry){
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }
  set symmetry(newSymmetry){
    if(typeof newSymmetry !== 'string'){
      throw new TypeError('This value is not a string');
    }
    this._symmetry = newSymmetry;
  }
};