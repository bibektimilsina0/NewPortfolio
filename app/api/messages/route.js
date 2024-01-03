

export const POST=async(req,res)=>{
    console.log(req)
    return new Response(JSON.stringify(req.body),{status:200})

}