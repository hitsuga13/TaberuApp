import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Load the environment variables from .env file

 import { URL } from "url";


 
const dbUrl = new URL(process.env.DATABASE_URL);
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

// const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   entities: [__dirname + '/./**/*.entity{.ts,.js}'],
//   synchronize: true,
// };
 const typeOrmConfig: TypeOrmModuleOptions = {
 
  type: "cockroachdb",
  url: dbUrl.toString(),
  ssl: true,
  extra: {
    options: routingId
  },
 entities: [__dirname + '/./**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default typeOrmConfig;
