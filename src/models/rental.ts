import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  CreatedAt,
  BelongsTo
} from 'sequelize-typescript'
import Stock from './stock'
import Account from './account'


@Table
export default class Rental extends Model<Rental> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number

  @ForeignKey(() => Stock)
  @Column
  stockId!: number

  @BelongsTo(() => Stock)
  stock!: Stock

  @Column(DataType.INTEGER)
  days!: number

  @CreatedAt
  @Column(DataType.DATE)
  date!: Date

  @Column(DataType.DATE)
  initDate!: Date

  @Column(DataType.DATE)
  deliveryDate!: Date

  @Column(DataType.INTEGER)
  state!: number

  @Column(DataType.INTEGER)
  price!: number

  @ForeignKey(() => Account)
  @Column(DataType.STRING)
  account!: Account
}
