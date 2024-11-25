// test/payments.test.js
const { payments } = require('../src');
const chai = require('chai');
const expect = chai.expect;

describe('Payments API', () => {
  it('should create a payment intent', async () => {
    const paymentIntent = await payments.createPaymentIntent(1000, 'usd', { description: 'Test Payment' });
    expect(paymentIntent).to.have.property('id');
    expect(paymentIntent.amount).to.equal(1000);
    expect(paymentIntent.currency).to.equal('usd');
  });
});

