const stripe= require('../config/stripeConfig')


async function createSubscription(customerId,priceId,options={}){
  try{
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items:[{price: priceId}]
      ...options ,
                                                           
      
    })
    
    return subscription 
    
  }
    
  catch(error){

    console.log(`${error.message}`)
  }
  
}

async function cancelSubscription(subscriptionId){
  try{
    const cancelledSubscription =await stripe.subscriptions.del(subscriptionId)
    return cancelledSubscription}
  catch(error){
    throw new Error(`${error.message}`)
  }
}
  
module.exports={
  createSubscription,
  cancelSubscription
}
