'use strict';
let Eukaryota = require('./Eukaryota');

module.exports = class Protsita extends Eukaryota{
  constructor(name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph);
  }
};