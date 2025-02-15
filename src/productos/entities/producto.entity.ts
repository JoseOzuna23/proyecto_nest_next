import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoImagen } from "./producto-imagen-entity";

@Entity()
export class Producto {


    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('text', {
        unique: true,  // se especifica para que el texto se unico y no se repita
    })
    nombre: string;


    @Column({
        type: 'text', 
        nullable: true
    })
    descripcion: string;


    @Column('float',{
        default: 0
    })
    precio:number;


      
    @Column('int',{
        default:0
    })
    stock: number;



    @OneToMany(
        
        ()=> ProductoImagen,
        (productoImagen) => productoImagen.producto,
        {cascade:true}
        
    )
    imagen?: ProductoImagen;
    
   


   











}
