import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  async user () {
    return '这是一个user api'
  }
}
