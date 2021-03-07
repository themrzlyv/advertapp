export const getData = async(url:string):Promise<any> => {
    const res:Response = await fetch(url)
    const result = await res.json()
    return result
}