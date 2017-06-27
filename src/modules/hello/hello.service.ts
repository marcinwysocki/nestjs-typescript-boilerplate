import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Component()
export class HelloService {
    public sayGenericHelloToNoOneInParticular(): Promise<string> {
        return Promise.resolve('OH HAI');
    }

    public sayHelloToSomeone(name?: string): Promise<string> {
        if (name === 'Marcin') {
            throw new HttpException("We don't talk to Marcin ( ͠° ͟ʖ ͡°)", 418);
        }

        return Promise.resolve(`Hello${name && `, ${name}`}!`);
    }
}
