import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class UserData extends Model<UserData> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phoneNumber?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    linkedId?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    linkPrecedence!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    createdAt!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    updatedAt!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    deletedAt?: string;
}
