/* eslint-disable prettier/prettier */
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  fullName: string;

  @Column
  email: string;

  @Column
  age: number;
}
