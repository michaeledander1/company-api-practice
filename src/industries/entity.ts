// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Company from '../companies/entity'
import Vacancy from '../vacancies/entity'

@Entity()
export default class Industry extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @OneToMany(_type => Company, company => company.industry)
    @JoinColumn()
    company: Company[];

  @OneToMany(_type => Vacancy, vacancy => vacancy.industry)
    @JoinColumn()
    vacancy: Vacancy[];

}