import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "@/domain/services/users.service";
import { User } from "@/domain/entities/user.entity";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  getUsersById(@Param("id") id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
