import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
    components: [HelloService],
    controllers: [HelloController],
})
export class HelloModule {}
