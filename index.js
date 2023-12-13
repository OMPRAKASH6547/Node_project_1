const express= require("express")
const router=require('./routes/EmployeeRoute')
const mongoose=require('mongoose')
const cors=require('cors')
// const router= require("./routes/EmployeeRoute")

const app=express()
const uri="mongodb+srv://rajk0723577:wIhHqgmQbW65VeTg@cluster0.uijdyop.mongodb.net/my-employee?retryWrites=true&w=majority"
app.use(express.json())

app.use(cors())

// app.use('/hello',router);

app.use(router);


mongoose.connect(uri).then(()=>{
    console.log("connectet")
    app.listen(5000,()=>{
        console.log("runing at 5000")
    })
}).catch((err)=>{
    console.log(err)

})