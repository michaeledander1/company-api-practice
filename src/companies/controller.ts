import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Company from './entity'


// this makes sure a class is marked as controller that always returns JSON
// perfect for our REST API
@JsonController()
export default class CompanyController {
    // this markes a method as endpoint
    // in this case it responds to any GET /companies/:id
    // request with :id being a variable parameter
    @Get('/companies/:id')
    getCompany(
      @Param('id') id: number
    ) {
      return Company.findOne(id, { relations: ["vacancy"]})
    }

    @Get('/companies/:id/vacancies')
    async getCompanyVacancies(
      @Param('id') id: number
    ) {
      const whatever: any = await Company.findOne(id, { relations: ["vacancy"]})
      return  whatever.name
    }

//     const userRepository = connection.getRepository(User);
// const users = await userRepository.find({ relations: ["photos"] });

    @Get('/companies')
    async allCompanies() {
        const companies = await Company.find({ relations: ["vacancy"]})
        return { companies }
    }
    @Put('/companies/:id')
    async updateCompany(
      @Param('id') id: number,
      @Body() update: Partial<Company>
    ) {
      const company = await Company.findOne(id)
      if (!company) throw new NotFoundError('Cannot find company')
    
      return Company.merge(company, update).save()
    }
    @Post('/companies')
    @HttpCode(201)
        createPage(
        @Body() company: Company
        ) {
        return company.save()
    } 
    }
