import { Estado } from "src/estudiantes/interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profesor {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('text', {
        unique: true,  // se especifica para que el texto sea unico y no se repita
    })
    nombres: string;

    @Column('text', {
        unique: true
    })
    correo: string;


    @Column('text')
    telefono: string;

    @Column('text')
    especialidad: string;

    @Column() // Solo la fecha (sin hora)
    fechaCotratacion: Date;

    @Column({
        type: 'enum',
        enum: Estado,
        default: Estado.ACTIVO,
    })
    estado: Estado;






}
