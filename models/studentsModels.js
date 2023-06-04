const mongoose = require("mongoose");
const { Schema } = mongoose;


const studentsSchema = new Schema(
    {
        Name: {
            type:String,
            required:true,
            default:"No Nmae",
        },
        Class: {
            type:String,
            required:true,
            default:"No Class"
        },
        Role: {
            type:Number,
            required:true,
            default:"No Role"
        },
        Remarks: {
            type:String,
            default:"No remarks"
        },
        Mobile: {
            type: String,
            validate: {
              validator: function(value) {
                return value.length === 11;
              },
              message: "Phone number must be 11 digits"
            },
            default: "No phone number"
            // required: true
          }
          
          

    },
    {timestamps:true,versionKey:false}
);

const Student=mongoose.model("Student",studentsSchema);
module.exports=Student;