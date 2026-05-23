import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModules } from './modules/usuarios/usuarios.module';
import { DatabaseModule } from './database/database.module';
import { MapaModule } from './modules/mapa/mapa.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
    UsuariosModules,
    MapaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
