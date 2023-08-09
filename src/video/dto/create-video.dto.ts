import { IsNotEmpty } from "class-validator";

export class CreateVideoDto {
    @IsNotEmpty()
    title: string ;
    @IsNotEmpty()
    url: string ;
}