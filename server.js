// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

function message(){

  let date =new Date()
  let day =date.getDay()

  if(day==1){
    return {
      "dayMessage": "Happy Monday! Start your week with energy!"
    }
  }
  else if(day==5){
    return{
      "dayMessage": "It's Friday! The weekend is near!"
    }
  }
  else{
    return{
      "dayMessage": "Have a wonderful day!"
    }
  }
}



app.get("/assistant/greet",async(req,res)=>{
   try {
      let user =req.query.name
      console.log(user)
       let mess = message()
       console.log(mess)
      let welcomeMessage =`Hello, ${user} Welcome to our assistant app!`
      mess.welcomeMessage =welcomeMessage
      res.status(200).json(mess)
    
   } catch (error) {
       res.status(500).json({status:false,message:"internal server error"})
   }
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log("Virtual Assistant API is running on http://localhost:3000");
});