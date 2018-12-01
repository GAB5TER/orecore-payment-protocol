'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on orecore-payment-protocol Module: {0}'
};

module.exports = require('orecore-lib').errors.extend(spec);
