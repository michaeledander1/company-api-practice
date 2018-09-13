// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Industry from '../industries/entity'
import Vacancy from '../vacancies/entity'

@Entity()
export default class Company extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @ManyToOne(_type => Industry, industry => industry.company)
  @JoinColumn()
  industry: Industry;

  @OneToMany(_type => Vacancy, vacany => vacany.company)
    @JoinColumn()
    vacancy: Vacancy[];
}