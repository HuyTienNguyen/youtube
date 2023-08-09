import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entitties/user.entity';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
dotenv.config();
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        // JwtModule.register({
        //     global: true ,
        //     secret: process.env.SECRET,
        //     signOptions: {expiresIn: process.env.EXP_IN_ACCESS_TOKEN}
        // }),
        ConfigModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
