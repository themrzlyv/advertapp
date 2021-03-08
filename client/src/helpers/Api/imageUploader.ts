export const uploadImage = async (file: any):Promise<any>  => {
    const data =  new FormData()
    data.append('file',file)
    data.append('upload_preset',"blogApp")
    data.append('cloud_name',"themrzlyv")
    const res = await fetch("https://api.cloudinary.com/v1_1/themrzlyv/image/upload",{
        method:"POST",
        body:data
    })
    const res2  = await res.json()
    return res2.url
}