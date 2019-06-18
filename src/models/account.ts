import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique
} from 'sequelize-typescript'


@Table
export default class Account extends Model<Account> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number

  @Column(DataType.STRING)
  name!: string

  @Unique
  @Column(DataType.STRING)
  username!: string

  @Column(DataType.STRING)
  password!: string

  @Column(DataType.STRING)
  avatar!: string

  @Column(DataType.INTEGER)
  state!: number

  @Column(DataType.STRING)
  background!: string

  @Column(DataType.INTEGER)
  rol!: number
}
