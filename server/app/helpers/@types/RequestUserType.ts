import { Request } from "express";

export type RequestUserDataType = {
    id?:string;
    iat?:number;
    exp?:number;
}

export interface Irequest extends Request {
    user?: RequestUserDataType | undefined
}