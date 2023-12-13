const mongoose= require('mongoose')

const Schema=mongoose.Schema

const employee= new Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
    ,phone:{
        type:String
    },
    photo:{
        type:Buffer,
        contentType:String
    }
},{
   timestamps:true 
})

const Employee=mongoose.model('Employee',employee)

module.exports=Employee;