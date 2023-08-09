import * as jwt from 'jsonwebtoken';



export const generateAccessToken= (payload, option={} ) => {
    const secret = process.env.ACCESS_JWT_SECRET_KEY.toString();
    return jwt.sign(payload, secret,option);
}
export const generateRefreshToken =( payload , option={}) => {
    const secret = process.env.ACCESS_JWT_SECRET_KEY.toString();
    return jwt.sign(payload, secret,option);
}

export const verifyRefreshJWT = async (tokenOld, option={}) => {
    const secret = process.env.ACCESS_JWT_SECRET_KEY.toString();
    return await jwt.verify(tokenOld, secret, option);
};
  