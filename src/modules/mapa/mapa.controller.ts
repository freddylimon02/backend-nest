import { Controller, Get } from '@nestjs/common';
import { MapaService } from './mapa.service';

@Controller('mapa')
export class MapaController {
    constructor(
        private readonly mapaServicio:MapaService
    ){}
    //Listar los departamentos
    @Get('listar')
    funListarMapa(){
        return this.mapaServicio.departamentoListar();
    }
}
