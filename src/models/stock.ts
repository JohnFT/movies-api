import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  CreatedAt,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import Movie from './movie'
import Rental from './rental'


@Table
export default class Stock extends Model<Stock> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number

  @ForeignKey(() => Movie)
  @Column
  movieId!: number

  @BelongsTo(() => Movie)
  movie!: Movie


  @CreatedAt
  @Column(DataType.DATE)
  date!: Date

  @HasMany(() => Rental, 'stockId')
  rental!: Rental

  @Column(DataType.INTEGER)
  state!: number
}
