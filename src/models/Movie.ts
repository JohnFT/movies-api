import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Stock from './stock'

@Table
export default class Movie extends Model<Movie> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.STRING(1000))
  description!: string

  @Column(DataType.STRING)
  gender!: string

  @Column(DataType.STRING)
  director!: string

  @Column(DataType.INTEGER)
  stars!: number

  @Column(DataType.INTEGER)
  time!: number

  @Column(DataType.STRING)
  avatar!: string

  @Column(DataType.STRING)
  background!: string

  @Column(DataType.INTEGER)
  price!: number

  @HasMany(() => Stock, 'movieId')
  stock!: Stock
}
