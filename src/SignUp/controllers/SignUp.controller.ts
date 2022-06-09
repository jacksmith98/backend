import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Education } from '../entities/education.entity';
import { SignUpService } from '../services/signup.service';

@Controller('educations')
export class SignUpController {
  constructor(private readonly signupService: SignUpService) {}

  @Post()
  async createEducation(@Res() response, @Body() education: Education) {
    const newEducation = await this.signupService.createEducation(education);
    return response.status(HttpStatus.CREATED).json({
      newEducation,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const educations = await this.signupService.findAll();
    return response.status(HttpStatus.OK).json({
      educations,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const education = await this.signupService.findOne(id);
    return response.status(HttpStatus.OK).json({
      education,
    });
  }
}
