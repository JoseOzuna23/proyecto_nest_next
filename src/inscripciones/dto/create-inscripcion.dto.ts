import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Cuota } from "src/cuotas/entities/cuota.entity";
import { Curso } from "src/cursos/entities/curso.entity";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Estado } from "src/estudiantes/interfaces";

export class CreateInscripcioneDto {

    @IsNotEmpty()
    curso: Curso;

    @IsNotEmpty()
    estudiante: Estudiante;

    @IsNotEmpty()
    cuota: Cuota;

    @IsEnum(Estado, { message: 'El estado debe ser ACTIVO o INACTIVO' })
    @IsOptional() // Solo si es opcional (por defecto es ACTIVO)
    estado?: Estado;

    @IsNotEmpty()
    @Type(() => Date) // Transforma el string a Date
    @IsDate({ message: 'La fecha debe ser válida' })
    fechaInscripcion: Date;



}
