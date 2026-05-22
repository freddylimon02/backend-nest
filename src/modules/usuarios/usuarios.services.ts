import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuariosService{
    // aca vienen las funciuones para traer los datos
    ListarUsuarios(){
        return ["Usuario 1", "Usuario 2"];
    }
}