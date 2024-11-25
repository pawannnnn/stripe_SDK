class StripeError extends Error{
  constructor(message){
    super(message){
      this.message= ' this is an error'
      
    } 
  }
}


module.exports={

  StripeError
}
