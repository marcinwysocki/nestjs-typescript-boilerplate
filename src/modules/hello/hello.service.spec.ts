import { Test } from '@nestjs/testing';
import { HelloService } from './hello.service';

describe('HelloService', () => {
    let service: HelloService;
    beforeEach(() => {
        service = new HelloService();
    });

    it('greets everybody', async () => {
        expect(await service.sayGenericHelloToNoOneInParticular()).toEqual(
            'OH HAI',
        );
    });
});
