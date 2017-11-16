import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Response,
} from '@nestjs/common';
import { GreetingDto } from '../../dto/GreetingDto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private helloService: HelloService) {}

    @Get('/')
    public async sayHello(@Response() res) {
        const greetings = await this.helloService.sayGenericHelloToNoOneInParticular();

        res.status(HttpStatus.OK).json(greetings);
    }
    @Get('/:name')
    public async sayHelloToSomeone(@Response() res, @Param('name') name) {
        const greetings = await this.helloService.sayHelloToSomeone(name);

        res.status(HttpStatus.OK).json(greetings);
    }

    @Post('/greeting')
    public async postSomething(
        @Response() res,
        @Body() { body, prefix, suffix }: GreetingDto,
    ) {
        res
            .status(HttpStatus.CREATED)
            .json({ greeting: `${prefix},\n${body}\n${suffix}` });
    }
}
