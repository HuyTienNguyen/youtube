import { Body, Controller,UseGuards,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.sto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entitties/user.entity';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){

    }

    // @Post()
    // @UseGuards(AuthGuard)
    // create(@Body()  createUserDto: CreateUserDto): Promise<User> {
    //     return this.userService.create(Number(id));
    // }




}
