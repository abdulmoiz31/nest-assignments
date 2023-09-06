import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [MongodbModule, UserModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
