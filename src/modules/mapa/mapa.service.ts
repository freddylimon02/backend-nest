import { Inject, Injectable } from '@nestjs/common';
import {Pool} from 'pg';

@Injectable()
export class MapaService {
    constructor(
        //con esto estamos haciendo la llamada al database.moules.ts
        @Inject('PG_POOL1') private readonly conexiondb:Pool
    ){}
    //aca hacemos la llamada a la base de datos
    async departamentoListar(){
        const resultado = await this.conexiondb.query(`SELECT * FROM fun_listardepartment();`);
        /*const resultado = await this.conexiondb.query(`
            SELECT 
                d.id,
                d.nombre
            FROM department d
            ORDER BY d.nombre;
            `);*/
        return resultado.rows;
    }
}
