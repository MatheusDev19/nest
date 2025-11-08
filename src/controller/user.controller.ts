import { Body, Controller, Get } from '@nestjs/common';
// import { CreateUserDto } from 'src/interface/create-user-dto';
import { UserService } from 'src/services/user.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Post()
  //   create(@Body() createUserDto: CreateUserDto) {
  //     return this.userService.create(createUserDto);
  //   }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
