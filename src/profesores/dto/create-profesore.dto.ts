import { Type } from "class-transformer";
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { Estado } from "src/estudiantes/interfaces";

export class CreateProfesoreDto {

    @IsString()
    @MinLength(3)
    nombres: string;

    @IsString()
    @IsEmail()
    correo: string;


    @IsString()
    telefono: string;

    @IsString()
    especialidad: string;


    @IsNotEmpty()
    @Type(() => Date) // Transforma el string a Date
    @IsDate({ message: 'La fecha debe ser válida' })
    fechaCotratacion: Date;



    @IsEnum(Estado, { message: 'El estado debe ser ACTIVO o INACTIVO' })
    @IsOptional() // Solo si es opcional (por defecto es ACTIVO)
    estado?: Estado;

}
