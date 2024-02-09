const express=require('express')
const cors=require('cors');
const app=express()
const {db}=require('./db/db')
const {readdirSync}=require('fs')
require('dotenv').config()
const PORT=process.env.PORT||5000

//middlewares
app.use(cors())
app.use(express.json())


//routes
readdirSync('./routes').map((route) =>app.use('/api/v1',require(`./routes/${route}`)))

const server=() =>{
    db()
   app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) 

}

server()