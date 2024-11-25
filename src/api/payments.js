// contains payments processing methods


const stripe= require('../config/stripeConfig')


// here i create  payment intent 


async function createPaymentIntent(amount,currency,options={}){
  
try{
  const paymentIntent= await stripe.paymentIntents.create({

    amount,currency,...options 
  })
  return paymentIntent
  
}catch(error){
  console.log(`failed to create paymenr ${error.message}`)
  
}
  

  // the code here  captire a payment or methods 
  async function capturePaymentIntent(paymentId){
    try{

      const capturedPayment= await stripe.paymentIntents.capture(paymentId)
      return capturePayment 
    }
    
  catch(error){
    console.log(`${error.message}`)
  }
 
}
