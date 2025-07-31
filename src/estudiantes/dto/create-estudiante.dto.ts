import { Type } from "class-transformer";
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Estado } from "../interfaces";

export class CreateEstudianteDto {

    @IsString()
    @MinLength(3)
    nombres: string;

    @IsNotEmpty()
    @Type(() => Date) // Transforma el string a Date
    @IsDate({ message: 'La fecha debe ser válida' })
    fechaNacimiento: Date;

    @IsString()
    genero: string;


    @IsNumber()
    @IsPositive()
    documentoIdentidad: number;


    @IsString()
    @IsEmail()
    correo: string;


    @IsString()
    telefono: string;

    @IsString()
    direccion: string;

    @IsNotEmpty()
    @Type(() => Date) // Transforma el string a Date
    @IsDate({ message: 'La fecha debe ser válida' })
    fechaRegistro: Date;


    @IsEnum(Estado, { message: 'El estado debe ser ACTIVO o INACTIVO' })
    @IsOptional() // Solo si es opcional (por defecto es ACTIVO)
    estado?: Estado;















}
