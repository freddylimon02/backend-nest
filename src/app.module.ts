import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModules } from './modules/usuarios/usuarios.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
    UsuariosModules
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
