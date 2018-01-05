import { IsNotEmpty, IsString } from 'class-validator';

export class GreetingDto {
    @IsNotEmpty()
    @IsString()
    public readonly prefix: string;

    @IsNotEmpty()
    @IsString()
    public readonly body: string;

    @IsNotEmpty()
    @IsString()
    public readonly suffix: string;
}
