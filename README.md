Orecore Payment Protocol
==============================

A module for [orecore](https://github.com/GAB5TER/orecore) that implements Payment Protocol and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install orecore-lib
npm install orecore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://bitcore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
const PaymentProtocol = require('orecore-payment-protocol');

const body = PaymentProtocol.PaymentRequest.decode(rawbody);
const request = new PaymentProtocol().makePaymentRequest(body);

const version = pr.get('payment_details_version');
const pki_type = pr.get('pki_type');
const pki_data = pr.get('pki_data');
const serializedDetails = pr.get('serialized_payment_details');
const signature = pr.get('signature');

// Verify the signature
const verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/GAB5TER/orecore/blob/master/CONTRIBUTING.md) on the main orecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/GAB5TER/orecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
