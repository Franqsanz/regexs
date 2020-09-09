'use strict';

module.exports = {
  RxNumberCommas: (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  RxRmAccents: (x) => {
    return x.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
}