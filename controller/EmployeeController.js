const Employee=require('../module/EmployeeModule')
// const Employee=require('../module/EmployeeModule')

//show the list of employee

const hello= async(req,res)=>{
    res.send("hello from controller")

}



const addEmployee= async(req,res)=>{
    try {
        const employe= await Employee.create(req.body)
       res.status(200).json(employe)
    } catch (error) {
        res.send(error)
    }

}

const showEmploye= async (req,res)=>{

    try {
        const employes=await Employee.find({})
        res.json(employes)
    } catch (error) {

        res.json(error)
        
    }

   

}
const getEmployeeByName = async(req,res)=>{
    try {
        const {id,name,phone}=req.params
        console.log(name)
    const employee= await Employee.findByName(phone)
    res.status(200).json(employee)
    } catch (error) {
        res.send(error)
    }
}

module.exports={hello,addEmployee,showEmploye,getEmployeeByName}