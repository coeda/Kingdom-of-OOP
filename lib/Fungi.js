'use strict';
let Eukaryota = require('./Eukaryota');

module.exports = class fungi extends Eukaryota{
  constructor(name){
    super(name, false, true, false, true);
  }
};