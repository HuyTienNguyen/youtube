import { CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from 'express';
import { log } from "console";
import { verifyRefreshJWT } from "../utils/constants";
@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException();
        }
        try{
           
            const payload = await verifyRefreshJWT(token);
            request['user_data']= payload;
        }catch{
            throw new HttpException({
                status: 419,
                message: "token expired"
            },419)
        }
        return true;
    }


    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization? request.headers.authorization.split(' ') : [];
        return type ==='Bearer'? token: undefined;
    }


}