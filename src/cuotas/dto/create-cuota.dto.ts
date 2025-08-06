import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Curso } from "src/cursos/entities/curso.entity";


export class CreateCuotaDto {

    @IsString()
    @IsOptional()
    descripcion?: string;


    @IsNumber()
    @IsPositive()
    @IsOptional()
    monto?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    cantidad?: number;

    @IsNotEmpty()    
    curso: Curso;  


}
