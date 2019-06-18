import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType
} from "sequelize-typescript";

@Table({ modelName: "Movie" })
export class Movie extends Model<Movie> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  description!: string;

  @Column(DataType.STRING)
  gender!: string;

  @Column(DataType.STRING)
  director!: string;

  @Column(DataType.INTEGER)
  stars!: number;

  @Column(DataType.INTEGER)
  time!: number;

  @Column(DataType.STRING)
  avatar!: string;

  @Column(DataType.STRING)
  background!: string;

  @Column(DataType.INTEGER)
  price!: number;
}
