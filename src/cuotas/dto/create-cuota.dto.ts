import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";


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




}
