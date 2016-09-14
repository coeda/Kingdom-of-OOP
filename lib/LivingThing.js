'use strict';

module.exports = class LivingThing{
  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }

  set name(newName){
    if (typeof newName !== 'string'){
      throw new TypeError('That is not a valid name');
    }
    this._name = newName;
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(newUniCellular){
    if(typeof newUniCellular !== 'boolean'){
      throw new TypeError('That is not a boolean value');
    }
    this._uniCellular = newUniCellular;
  }



};