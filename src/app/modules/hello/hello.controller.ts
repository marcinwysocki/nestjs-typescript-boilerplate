import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { GreetingDto } from '../../dto/GreetingDto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private helloService: HelloService) {}

    @Get('/')
    public async sayHello() {
        const greetings = await this.helloService.sayGenericHelloToNoOneInParticular();

        return greetings;
    }
    @Get('/:name')
    public async sayHelloToSomeone(@Param('name') name) {
        const greetings = await this.helloService.sayHelloToSomeone(name);

        return greetings;
    }

    @Post('/greeting')
    public async postSomething(@Body() { body, prefix, suffix }: GreetingDto) {
        return { greeting: `${prefix},\n${body}\n${suffix}` };
    }
}
