import {
    Body,
    Controller, Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Post, Query,
    UseGuards,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { User } from 'src/user/entitties/user.entity';
import { log } from 'console';
import { AuthGuard } from "./auth.guard";
import { LoginUserDto, RefreshTokenDto, RegisterUserDto } from "./dto/auth.dto";

@Controller('auth')

export class AuthController {
    constructor(private authService:AuthService){}

    @Post('register')
    @HttpCode(HttpStatus.OK)
    async register(@Body() registerUserDto:RegisterUserDto):Promise<User> {
        const isEmailUnique = await this.authService.isEmailUnique(registerUserDto.email);

        if(!isEmailUnique){
            throw new HttpException('Email is already taken', HttpStatus.BAD_REQUEST);
        }else {
            return this.authService.register(registerUserDto);
        }
    }
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto: LoginUserDto): Promise<User> {

        return this.authService.login(loginUserDto);
    }


    @Post('refresh-token')
    refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<any> {
        return this.authService.refreshToken(refreshTokenDto);
    }


}
