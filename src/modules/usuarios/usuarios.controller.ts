import { Controller, Get } from "@nestjs/common";
import { UsuariosService } from "./usuarios.services";

//ruta: http:localhost:3005/api/usuarios/listar
@Controller('usuarios')
export class UsuariosController{
    constructor(
        private usuariosServicio:UsuariosService
    ){}
    @Get('listar')
    funListar(){
        return this.usuariosServicio.ListarUsuarios();
    }
}