'use strict';

module.exports = {
  numberCommas: (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  rmAccents: (x) => {
    return x.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  },
  replaceSpaceScriptsMedium: (x) => {
    return x.replace(/\s/g, '-');
  },
  replaceSpaceScriptsLow: (x) => {
    return x.replace(/\s/g, '_');
  }
}