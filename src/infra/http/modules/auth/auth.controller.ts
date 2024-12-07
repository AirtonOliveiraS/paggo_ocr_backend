import { Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthRequestModel } from "./models/authRequestModel";
import { SignInUseCase } from "src/modules/auth/useCases/SignInUseCase";
import { JwtAuthGuard } from "./guards/jwtAuth.guard";
import { Public } from "./decorators/isPublic";


@Controller()
export class AuthController {

  constructor(private signInUseCase: SignInUseCase) {}

 
    @Post('signIn')
    @Public()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local'))
    async signIn(@Request()request:AuthRequestModel) {
        const access_token = await this.signInUseCase.execute({
            user: request.user,
          });
      
          return { access_token };
    }

    @Get('teste')
    
    async teste(){
      return 'teste'
    }
}