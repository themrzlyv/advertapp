export interface UserDataType {
    _id:string;
    name:string;
    email:string;
    avatar:string;
    password:string;
    role:boolean;
    favorites: object [];
    about:string;
}