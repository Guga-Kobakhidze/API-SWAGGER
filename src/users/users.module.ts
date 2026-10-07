import { Module } from '@nestjs/common';
import { UsersLibModule } from '@app/users-lib';
import { UsersController } from './users.controller';

@Module({
  imports: [UsersLibModule],
  controllers: [UsersController],
})
export class UsersModule {}
