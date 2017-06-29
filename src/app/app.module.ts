import { Module } from '@nestjs/common';

import { HelloModule } from './modules/hello/hello.module';

@Module({
    modules: [HelloModule],
})
export class ApplicationModule {}
