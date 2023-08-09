import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entitties/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.sto';
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>  ){}
    
    // async create(createUserDto: CreateUserDto): Promise<User> {
    //     const hashPassword = await bcrypt.hash()
    // }

}
