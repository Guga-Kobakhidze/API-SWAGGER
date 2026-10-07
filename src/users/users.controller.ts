import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@app/common';
import { UserFilterDto, UserModel, UsersLibService } from '@app/users-lib';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersLibService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [UserModel] })
  public findAll(@Query() filters: UserFilterDto): Promise<UserModel[]> {
    return this.usersService.findAll(filters);
  }
}
