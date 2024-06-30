import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true
})
export class UserData extends Model<UserData> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phoneNumber?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
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
        defaultValue: DataType.NOW,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    updatedAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    deletedAt?: Date;
}
