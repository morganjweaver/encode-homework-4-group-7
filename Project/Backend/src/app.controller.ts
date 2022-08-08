import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({
    summary: 'Server status check',
    description: 'This server is polite so it says hello to everyone that pings it',
  })
  @ApiResponse({
    status: 200,
    description: 'Hello successful',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
