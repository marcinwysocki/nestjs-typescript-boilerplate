import { Module } from '@nestjs/common';

import { HelloModule } from './hello/hello.module';

@Module({
    modules: [HelloModule],
})
export class ApplicationModule {}
