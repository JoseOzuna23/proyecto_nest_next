import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateCuotaDto } from "src/cuotas/dto/create-cuota.dto";

export class CreateCursoDto {

    @IsNumber()
    codigoCurso: number;

    @IsString()
    nombre: string;

    @IsString()
    aula: string;

    @IsNumber()
    duracion: number;

    @IsString()
    periodo: string;

   }
