import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import EventEmitter from "events";

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
        {    bodyParser: true,
            abortOnError: false,}
    );

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    );
    app.enableCors();
    app.listen(3000, "0.0.0.0");
}
EventEmitter.defaultMaxListeners = 30;
bootstrap();
