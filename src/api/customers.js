const stripe = require('../config/stripeConfig')
async function createCustomer(data){
  try{
    const customer = await stripe.customers.create(data)
    
    return customer 
    
  }
  catch(error){
    console.log(`${error.message}`)
    
    
  }
}

async function retrieveCustomer(customerId){
  try{
    const retrieved = await stripe.customers.retrieve(customerId)
    return retrieved 
  }
  catch(error){
    console.log(`$error.message}`)
  }
}
module.exports={
  retrieveCustomer,
  createCustomer
  
}
