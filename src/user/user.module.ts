import { Module } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { DatabaseModule } from 'database/database.module';
import { User } from './models/user.entity';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([User])],
  exports: [UsersRepository],
  providers: [UsersRepository],
})
export class UserModule {}
