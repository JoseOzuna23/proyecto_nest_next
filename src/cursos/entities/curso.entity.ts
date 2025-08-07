import { Cuota } from "src/cuotas/entities/cuota.entity";
import { Inscripcion } from "src/inscripciones/entities/inscripcion.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int', {
        unique: true,  // se especifica para que el texto sea unico y no se repita
    })
    codigoCurso: number;

    @Column('text', {
        unique: true,  // se especifica para que el texto sea unico y no se repita
    })
    nombre: string;

    @Column('text')
    aula: string;

    @Column('int')
    duracion: number;

    @Column('text')
    periodo: string;

    @OneToMany(() => Cuota, (cuota) => cuota.curso)
    cuotas: Cuota[];

    @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.curso)
    inscripcion: Inscripcion[];

}
