const express = require('express')
const port = 3040
const app = express();
const cors= require('cors')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
res.send('hello')
})

app.post('/',(req,res)=>{
    try{
        const{Username , Email , Password , DateofBirth} = req.body

        if(!Username)
            return res.status(400).json({message:"Username cannot be empty"})

        else if(!Email)
            return res.status(400).json({message:"Email cannot be empty"})
    
        if(Password<8 && Password>16)
            return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }
    catch(e){
        console.log(e.message);
    }
})
app.listen(port,()=>{
    console.log(`Server is connected succesfully ${port}`)
})
