import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductoDto {

    @IsString()
    @MinLength(1)
    nombre:string;


    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    precio?: number;


    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    
}
