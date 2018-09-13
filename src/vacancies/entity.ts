// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Company from '../companies/entity'
import Industry from '../industries/entity';

@Entity()
export default class Vacancy extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @ManyToOne(_type => Company, company => company.vacancy)
  @JoinColumn()
  company: Company;

  @ManyToOne(_type => Industry, industry => industry.vacancy)
  @JoinColumn()
  industry: Industry;
}