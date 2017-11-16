import { HttpException } from '@nestjs/core';
import { Test } from '@nestjs/testing';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HelloModule', () => {
    describe('HelloService', () => {
        let service: HelloService;

        beforeEach(async () => {
            const module = await Test.createTestingModule({
                components: [HelloService],
                controllers: [HelloController],
            }).compile();

            service = module.get<HelloService>(HelloService);
        });

        it('greets everybody', async () => {
            expect(await service.sayGenericHelloToNoOneInParticular()).toEqual(
                'OH HAI',
            );
        });

        it('greets certain person', async () => {
            expect(await service.sayHelloToSomeone('Joe')).toEqual(
                'Hello, Joe!',
            );
        });

        it("doesn't talk to Marcin", async () => {
            try {
                await service.sayHelloToSomeone('Marcin');
            } catch (err) {
                expect(err).toBeInstanceOf(HttpException);
                expect(err.response).toEqual(
                    "We don't talk to Marcin ( ͠° ͟ʖ ͡°)",
                );
            }
        });
    });
});
