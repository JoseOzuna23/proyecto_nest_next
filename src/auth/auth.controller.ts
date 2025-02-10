import { Controller, Get, Post, Body, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorador/get_user-decorador';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorador/role-protected/role-protected.decorator';
import { ValidRoles } from './interfaces';
import { Auth } from './decorador/auth.decorator';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
  
  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
   // @Req() request: Express.Request
   @GetUser() user: User
  ){
   
   
    return {
      ok:true,
      message: 'hola mundo',
      user,
    }
  }

  @Get('private2')
  @RoleProtected(ValidRoles.superUser)
 // @SetMetadata('roles',[ 'admin', 'super-user'])
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(
    @GetUser() user:User
  ){
    return{
      ok:true,
      user
    }
 
  }


  @Get('private3')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
 
  privateRoute3(
    @GetUser() user:User
  ){
    return{
      ok:true,
      user
    }
 
  }

}
