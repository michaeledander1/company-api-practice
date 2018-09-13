import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Industry from './entity'

// this makes sure a class is marked as controller that always returns JSON
// perfect for our REST API
@JsonController()
export default class IndustryController {
    // this markes a method as endpoint
    // in this case it responds to any GET /industries/:id
    // request with :id being a variable parameter
    @Get('/industries/:id')
    getIndustry(
      @Param('id') id: number
    ) {
      return Industry.findOne(id)
    }
    @Get('/industries')
    async allIndustries() {
        const industries = await Industry.find()
        return { industries }
    }
    @Put('/industries/:id')
    async updateIndustry(
      @Param('id') id: number,
      @Body() update: Partial<Industry>
    ) {
      const industry = await Industry.findOne(id)
      if (!industry) throw new NotFoundError('Cannot find industry')
    
      return Industry.merge(industry, update).save()
    }
    @Post('/industries')
    @HttpCode(201)
        createPage(
        @Body() industry: Industry
        ) {
        return industry.save()
    } 
    }
