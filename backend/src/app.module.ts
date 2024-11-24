import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { QuizzesModule } from './quizzes/quizzes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/e-learning-platform'),
    UsersModule,
    CoursesModule,
    ModulesModule,
    QuizzesModule,
  ],
})
export class AppModule {}
