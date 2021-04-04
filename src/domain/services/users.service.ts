import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "@/domain/entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }
}
