import { Global, Module } from "@nestjs/common";

import {Pool} from 'pg';

@Global()

@Module({
    providers:[
        {
            provide:'PG_POOL1',
            useFactory:()=>{
                return new Pool({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database:process.env.DB_DATABASE
                })
            }
        }
    ],
    exports: ['PG_POOL1']
})

export class DatabaseModule{}