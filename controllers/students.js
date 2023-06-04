const Student = require("../models/studentsModels");



exports.InsertStudents = async (req,res)=>{
   try {
        //destructure name,clss and role form req.body;
        const {Name,Class,Role,Mobile}= req.body;

        //creat a new instance of student object and save data in database
        const student =await new Student ({
                Name:Name,
                Class:Class,
                Role:Role,
                Mobile:Mobile,
        }).save();
      
        res.json({
            student:{
                id:student._id,
                Name:student.Name,
                Class:student.Class,
                Role:student.Role,
                Mobile:student.Mobile
            }
        })
   } catch (err) {
        res.json({err})
   }

    
};

exports.ReadStudent=async(req,res)=>{
    try {
        const findStudentData =await Student.find();


        res.json({
            // data:{
                Name:findStudentData.Name,
                Class:findData.Class,
                Role:findStudentData.Role
                // findStudentData
                // findData
            // }
        });

    } catch (error) {
        console.log(error.massage);
    }
};

exports.ReadOneStudent= async (req,res)=>{
    try {
        const {id} = req.params;

        const findOneSingleData = await Student.findOne({_id:id});

        console.log(findOneSingleData);
        res.json({
           
                // _id:id,
                // Name:findOneSingleData.Name,
                // Class:findOneSingleData.Class,
                // Role:findOneSingleData.Role
                findOneSingleData
         
        });
    } catch (err) {
        console.log(err);
    }
};


exports.UpdatedOnedata =async (req,res)=>{
    try {
        const {id} = req.params;
        // const {Name,Class,Roll} = req.body;


        const UpdatedOnedata = await Student.findByIdAndUpdate(id,req.body,{new:true});
        if(UpdatedOnedata){
            res.status(200).json({
                // name:UpdatedOnedata.Name
                UpdatedOnedata
            });;
        }else{
            res.status(404).json({err:'student not found'})
        }
        
    } catch (err) {
        console.log(err);
    }
};

exports.deleteData=async(req,res)=>{
    const {id} = req.params;

    const deleteStudent = await Student.findOneAndRemove({_id:id});

    if(deleteStudent){
        res.status(200).json({msg:"delete success"});
    }
}





