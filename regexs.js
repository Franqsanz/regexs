'use strict';

module.exports = {
  numberCommas: (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  rmAccents: (x) => {
    return x.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  },
  spaceScriptsMedium: (x) => {
    return x.replace(/\s/g, '-');
  },
  spaceScriptsLow: (x) => {
    return x.replace(/\s/g, '_');
  },
  escapeRg: (x) => {
    return x.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
}