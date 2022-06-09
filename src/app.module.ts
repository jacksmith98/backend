import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Education } from './SignUp/entities/education.entity';
import { User } from './SignUp/entities/user.entity';
import { SignUpModule } from './SignUp/SignUp.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jack',
      database: 'signup',
      entities: [Education],
      synchronize: true,
      dropSchema: true,
    }),
    SignUpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
