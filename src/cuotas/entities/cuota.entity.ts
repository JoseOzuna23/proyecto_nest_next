
import { Curso } from "src/cursos/entities/curso.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cuota {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    descripcion: string;

    @Column('float', {
        default: 0
    })
    monto: number;


    @Column('int', {
        default: 0
    })
    cantidad: number;

    @ManyToOne(() => Curso, (curso) => curso.cuotas)
    curso: Curso;  

}
