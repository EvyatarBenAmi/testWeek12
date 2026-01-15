import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'item' })
export class Item extends Model{

    @Column
    name: string

    @Column
    type: string

    @Column
    quantity: number

    @Column
    pricePerUnit: number

    @Column
    hasImage: boolean

}