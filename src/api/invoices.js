
const stripe = require('...config/stripeConfig')
async function createInvoice(customerId,items){
  try{
    const invoicePromises= items.map((item)=>{
     stripe.invoiceItems.create({
       customer:customerId, amount :amount:item.amount
       , currency:item.currency, 
       description: item.description 
       
     })
    })
    await Promise.all(invoicePromises)
    
  }
  catch(error){
    throw new Error(`${error.message}`)
  }
  
  
}


async function payInvoice(invoiceId){
  try{
    const payedVoice= await stripe.invoices.pay(invoiceId)
    return payedVoice 
    
  }
  catch(error){
    thorw new error(`${error.nessage}`)
  }
  
}

module.exports={
  payInvoice, 
  createInvoice
}
