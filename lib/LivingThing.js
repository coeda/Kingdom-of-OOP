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
  // should have a method named name that returns the value of the private property _name
  get name(){
    return this._name;
  }
  // should have a method named name that sets the value of the private property _name
  set name(newName){
    if (typeof newName !== 'string'){
      throw new TypeError('That is not a valid name');
    }
    this._name = newName;
  }
  // should have a method named uniCellular that returns a boolean value based on the private property _uniCellular
  get uniCellular(){
    return this._uniCellular;
  }
  // should have a method named uniCellular that sets the value of the private property _uniCellular
  set uniCellular(newUniCellular){
    if(typeof newUniCellular !== 'boolean'){
      throw new TypeError('That is not a boolean value');
    }
    this._uniCellular = newUniCellular;
  }
  // should have a method named multiCellular that returns a boolean value based on the private property _uniCellular
  get multiCellular(){
    if(this._uniCellular === true){
      return false;
    } else {
      return true;
    }
  }
  // should have a method named multiCellular that sets the value of the private property _uniCellular
  set multiCellular(newMultiCellular){
    if(newMultiCellular === true){
      this._uniCellular = false;
    } else {
      this._uniCellular = true;
    }
  }
  // should have a method named eukaryote that returns a boolean value based on the private property _trueNucleus
  get eukaryote(){
    return this._trueNucleus;
  }
  // should have a method named eukaryote that sets the value of the private property _trueNucleus
  set eukaryote(newEukaryote){
    if(typeof newEukaryote !== 'boolean'){
      throw new typeError('This is not a boolean value');
    }
    this._trueNucleus = newEukaryote;
  }
  // should have a method named prokaryote that returns a boolean value based on the private property _trueNucleus
  get prokaryote(){
    if(this._trueNucleus === true){
      return false;
    } else {
      return true;
    }
  }
  // should have a method named prokaryote that sets the value of the private property _trueNucleus
  // should have a method named anaerobic that returns a boolean value based on the private property _anaerobic
  // should have a method named anaerobic that sets the value of the private property _anaerobic
  // should have a method named aerobic that returns a boolean value based on the private property _anaerobic
  // should have a method named aerobic that sets the value of the private property _anaerobic
  // should have a method named asexual that returns a boolean value based on the private property _asexual
  // should have a method named asexual that sets the value of the private property _asexual
  // should have a method named sexual that returns a boolean value based on the private property _asexual
  // should have a method named sexual that sets the value of the private property _asexual
  // should have a method named mobile that returns a boolean value based on the private _mobile
  // should have a method named mobile that sets the value of the private _mobile
  // should have a method named immobile that returns a boolean value based on the private `
  // should have a method named immobile that sets the value of the private _mobile


};