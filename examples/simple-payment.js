
// examples/simple-payment.js
const { payments } = require('../src');

async function run() {
  try {
    const paymentIntent = await payments.createPaymentIntent(1000, 'usd', { description: 'Test Payment' });
    console.log('Created Payment Intent:', paymentIntent);
  } catch (error) {
    console.error('Error creating payment:', error.message);
  }
}

run();
