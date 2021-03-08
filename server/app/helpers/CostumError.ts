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




export const regValidator = (name:string,avatar:string,email:string,password:string):string | undefined => {
    if(!name || !email || !password || !avatar)
        return "Please fill all inputs"

    if(password.length < 6) 
        return "Password must be min 6 character"

    if(!validateEmail(email))
        return "Please write correct email"
}

export const loginValidator = (email:string,password:string):string | undefined => {
    if(!email || !password)
        return "Please fill all inputs"

    if(password.length < 6) 
        return "Password must be min 6 character"

    if(!validateEmail(email))
        return "Please write correct email"
}



const validateEmail = (email:string):boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}