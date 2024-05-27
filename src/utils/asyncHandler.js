// it will just create method and export it. wrapper function for #DataBAse connrction nothing else

const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err));
    }
}

export {asyncHandler} 


// method 2

// // higher order function , take function as an argument 
// const asyncHandler = (fn) => async ( req,res,next)=>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }