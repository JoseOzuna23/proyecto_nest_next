import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
            message: 'La contraseña debe de tener minimo 8 caracteres, al menos una letra, un numero, un caracter especial'
        })
    password:string;

    @IsString()
    @MinLength(1)
    fullName:string;
}