// method m1
const asyncHandler = (requestHandler) =>{
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  }
  };
  export default asyncHandler;

// method m2 of same thing

// const asyncHandler=(requestHandler)=>async(req , res , next)=>{
// try{
// await requestHandler(req , res , next);
// }catch{
// res.status(err.code ).json({
//     success:false,
//     message :err.message
// })

// }
// }