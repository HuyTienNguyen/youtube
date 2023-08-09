import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}


export class LoginUserDto {
  @IsNotEmpty()
  username:string;

  @IsString()
  @IsNotEmpty()
  password:string;
}



export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  username: string ;


  @IsNotEmpty()
  @IsEmail()
  email: string ;


  @IsString()
  @IsNotEmpty()
  password: string ;

  phone_number: string ;

  date_of_birth: string ;

}