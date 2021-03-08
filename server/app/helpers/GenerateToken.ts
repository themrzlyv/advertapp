import jwt from 'jsonwebtoken'

export const createAccessToken = (user:any):string => {
    return jwt.sign(user, `${process.env.ACCESS_TOKEN_SECRET}`, {expiresIn: '11m'});
}


export const createRefreshToken = (user:any):string =>{
    return jwt.sign(user, `${process.env.REFRESH_TOKEN_SECRET}`, {expiresIn: '7d'});
}