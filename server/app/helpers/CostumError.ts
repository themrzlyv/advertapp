interface IvalidData {
    title:string,
    image:string,
    tags:string [],
    author:string,
    city:string,
    description:string,
    price:string,
    email:string
}


export const validateAdvert = (props:IvalidData):string | undefined => {
    if(!props.title || !props.image || !props.tags || !props.author || !props.city || !props.description || !props.price || !props.email)
        return "Please fill all inputs"

    if(props.title.length >= 25 || props.description.length >= 60)
        return "Wrong Entry"
}