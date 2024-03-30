import prisma from "../DB/db.config.js";


 export const  createUser = async(req,res)=>{


     const {name,email,password}=req.body
const  findUser = await  prisma.user.findUnique({

    where: {
        email: email,
      },


})



 if(findUser){
     return res.json({

message:" this email has been taken"

     })
 }

  const newUser =  await prisma.user.create({

  data:{

name:name,
email:email,
password:password

  }

  })
   return res.json({

    name,
    message:"new name hasbeen created"
   })


 }

 export  const updateUser = async(req,res)=>{

    const userId = req.params.id;


    const foundUserById = await prisma.user.findUnique({
      where: {
          id: parseInt(userId) // Assuming userId is of type number
      }
  });


  


 }

