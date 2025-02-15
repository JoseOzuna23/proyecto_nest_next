import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Producto } from "./producto.entity";



@Entity()
export class ProductoImagen{

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url:string;

    @ManyToOne(
    ()=> Producto,
    (producto) => producto.imagen
        
    )
    producto: Producto
}