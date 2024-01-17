import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards';
import { UserRequest } from 'src/utils/request';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('user')
  getUser(@Req() req: UserRequest) {
    return req.user;
  }
}
