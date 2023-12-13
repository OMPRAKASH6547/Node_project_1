const express=require('express')
const route=express.Router()

const controller=require('../controller/EmployeeController')
const Employee = require('../module/EmployeeModule')


route.get('/new',controller.hello)

route.post('/addEmployee',controller.addEmployee)


route.get('/allEmplyee',controller.showEmploye)

route.get('/employee/:phone',controller.getEmployeeByName)

//update a product
route.put('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params
    const product=await Product.findByIdAndUpdate(id,req.body)
    if(!product){
        return res.status(200).json(product)
    }
    res.status(200).json(product)
    res.status(200).json(product)
    } catch (error) {
        res.send(error)
    }
})

route.delete('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params
    const product=await Product.findByIdAndDelete(id)
    res.status(200).json(product)
    } catch (error) {
        res.send(error)
    }
})



module.exports=route;
