import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var whitelist = [
    "http://localhost:9000"
    
  ]
  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log(origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  });

  app.use((req, res, next) => {
    // console.log("Cookies:", req.cookies);

    // console.log(req)
    // console.log(req, res);
    // res.header('Access-Control-Allow-Origin',  '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type,  Accept");
    next();
  });

  await app.listen(3000);
}
bootstrap();


