import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "../interfaces";

@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,  // se especifica para que el texto sea unico y no se repita
    })
    nombres: string;

    @Column() // Solo la fecha (sin hora)
    fechaNacimiento: Date;

    @Column('text')
    genero: string;

    @Column('int', {
        unique: true,  // se especifica para que el texto sea unico y no se repita
    })
    documentoIdentidad: number;

    @Column('text', {
        unique: true
    })
    correo: string;

    @Column('text')
    telefono: string;

    @Column('text')
    direccion: string;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    fechaRegistro: Date;

    @Column({
        type: 'enum',
        enum: Estado,
        default: Estado.ACTIVO,
    })
    estado: Estado;









}
