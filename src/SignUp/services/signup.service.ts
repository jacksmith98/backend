import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Education } from '../entities/education.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class SignUpService {
  [x: string]: any;
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  findAll(): Promise<Education[]> {
    return this.educationRepository.find();
  }

  //   findOne(id: string): Promise<Education> {
  //     return this.educationRepository.findOne({ where: { id } });
  //   }

  createEducation(education: Education): Promise<Education> {
    return this.educationRepository.save(education);
  }
}
