import TryCatch from "../middleware/TryCatch.js";
import {rm} from "fs";
import fs from "fs";
import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const createFLW=TryCatch(async(req,res)=>{
   const {name,email,password}= req.body;

   //const image=req.file;

   const hashPassword = await bcrypt.hash(password, 10);
   await User.create({
    name,
    email,
    password:hashPassword,
    role:"FLW",
    // createdBy:req.user._id
   });
   res.status(201).json({
    message:"FLW created successfully"
   });
});















// export const addLecture=TryCatch(async(req,res)=>{
//     const course=await Course.findById(req.params.id);
//     if(!course){
//         return res.status(404).json({
//             message:"Course not found"
//         });
//     }
//     const {title,description}= req.body;
//     const video=req.file;
//     const lecture=await Lecture.create({
//         title,
//         description,
//         video:video?.path,
//         course:course._id
//     });
//     res.status(201).json({
//         message:"Lecture added successfully",lecture
//     });
// });

// export const deleteLecture=TryCatch(async(req,res)=>{
//     const lecture=await Lecture.findById(req.params.id);
//     if(!lecture){
//         return res.status(404).json({
//             message:"Lecture not found"
//         });
//     }
//     rm(lecture.video,(err)=>{
//         console.log("Video deleted");
//     });
//     await lecture.deleteOne();
//     res.json({
//         message:"Lecture deleted successfully"
//     });
// });

// const unlinkAsync=promisify(fs.unlink);

// export const deleteCourse=TryCatch(async(req,res)=>{
//     const course=await Course.findById(req.params.id);

//     const lectures=await Lecture.find({course:course._id});
//     if(!course){
//         return res.status(404).json({
//             message:"Course not found"
//         });
//     }
//     await Promise.all(
//         lectures.map(async(lecture)=>{
//             await unlinkAsync(lecture.video);
//             console.log("Video deleted");
//         }
//     ));

//     rm(course.image,(err)=>{
//         console.log("image deleted");
//     });

//     await Lecture.find({course:course._id});
//     await course.deleteOne();
//     await User.updateMany({},{$pull:{subscription:req.params.id}});
//     res.json({
//         message:"Course deleted successfully"
//     });
// });

// export const getAllStats= TryCatch(async(req,res)=>{
//     const totalCourses=(await Course.find()).length;
//     const totalLectures=(await Lecture.find()).length;
//     const totalUsers=(await User.find()).length;

//     const stats={
//         totalCourses,
//         totalLectures,
//         totalUsers
//     };
//     res.json({stats});
// });

// export const getAllUser=TryCatch(async(req,res)=>{
//     const users=await User.find({_id:{$ne: req.user._id }}).select("-password");

//    res.json({users});
// });

// export const updateRole=TryCatch(async(req,res)=>{
//     const user= await User.findById(req.params.id);

//     if(user.role==="user")
//     {
//         user.role="admin";
//         await user.save();

//         return res.status(200).json({
//             messsage:"Role updated to admin"
//         });
//     }

//     if(user.role==="admin")
//         {
//             user.role="user";
//             await user.save();
    
//             return res.status(200).json({
//                 messsage:"Role updated to user"
//             });
//         }
// });