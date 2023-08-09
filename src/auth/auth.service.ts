import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitties/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserDto, RefreshTokenDto, RegisterUserDto } from "./dto/auth.dto";
import { generateAccessToken, generateRefreshToken, hashPassword, verifyRefreshJWT } from "../utils/constants";
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {
    }


    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const hashPassworded = await hashPassword(registerUserDto.password.toString());
        return await this.userRepository.save({ ...registerUserDto, refresh_token: "refresh_token_string", password: hashPassworded });
    }


    async login(loginUserDto : LoginUserDto): Promise<any> {
        const user = await this.userRepository.findOne(
            {
                where: {email: loginUserDto.email}
            }
        )
        if(!user){
            throw new HttpException("Email is not exist",HttpStatus.UNAUTHORIZED);
        }
        const checkPass = bcrypt.compareSync(loginUserDto.password, user.password);
        if(!checkPass){
            throw new HttpException('Password is not correct',HttpStatus.UNAUTHORIZED);
        }
        //generate access_token and refresh_token
        const payload = {id: user.id, email:user.email};
        const accessTokenExpireAt = Date.now() + (Number(process.env.ACCESS_TOKEN_EXPIRE_IN_SEC) * 1000);
        const access_token = generateAccessToken(payload, {
            expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRE_IN_SEC),
        });
        const refresh_token = generateRefreshToken(payload, {
            expiresIn: Number(process.env.REFRESH_TOKEN_EXPIRE_IN_SEC),
        });

        return {access_token, refresh_token, accessTokenExpireAt};

    }

    async refreshToken( refreshTokenDto: RefreshTokenDto): Promise<any> {
        try{

            const verifyTokenOld = await verifyRefreshJWT(refreshTokenDto.refreshToken);
            console.log("verifyTokenOld     ",verifyTokenOld);
            let access_token;
            let refresh_token;
            try{
                access_token =await generateAccessToken(verifyTokenOld);
                refresh_token = await generateRefreshToken(verifyTokenOld);
                return {access_token, refresh_token};
            }catch(error){
                throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
            }
        }catch(error ){
            throw new HttpException('refresh-token is not valid', HttpStatus.BAD_REQUEST);
        }
    }

    async isEmailUnique(email: string): Promise<boolean> {
        const userWithSameEmail = await this.userRepository.findOne({ where: { email } });
        if(!userWithSameEmail ){
            return true ;
        }else {
            return false;
        }
    }



  


   
}
