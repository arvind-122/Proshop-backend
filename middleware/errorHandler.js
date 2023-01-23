const errorHandler=(error,req,res,next)=>{
    let status=error.status|| 500;
    let errMessage=error.message|| "something went wrong";
    res.status(status).send({message:errMessage})
}
export default errorHandler;