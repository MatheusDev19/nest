import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  //   async create(): Promise<User[]> {

  //   }
}
