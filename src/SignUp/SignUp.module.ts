import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpController } from './controllers/SignUp.controller';

import { Education } from './entities/education.entity';
import { SignUpService } from './services/signup.service';

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  providers: [SignUpService],
  controllers: [SignUpController],
})
export class SignUpModule {}
