import { Cuota } from "src/cuotas/entities/cuota.entity";
import { Curso } from "src/cursos/entities/curso.entity";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Estado } from "src/estudiantes/interfaces";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Inscripcion {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    fechaInscripcion: Date;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.inscripcion)
    estudiante: Estudiante;

    @ManyToOne(() => Curso, (curso) => curso.inscripcion)
    curso: Curso;

    @Column({
        type: 'enum',
        enum: Estado,
        default: Estado.ACTIVO,
    })
    estado: Estado;


    @ManyToOne(() => Cuota, (cuota) => cuota.inscripcion)
    cuota: Cuota;



}
