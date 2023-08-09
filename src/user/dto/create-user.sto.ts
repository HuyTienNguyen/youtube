import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username : string ;

    @IsNotEmpty()
    @IsEmail()
    email: string ;
    
    @IsNotEmpty()
    password: string ;
    @IsNotEmpty()
    date_of_birth: Date;
    
    phone_number: string ;
}