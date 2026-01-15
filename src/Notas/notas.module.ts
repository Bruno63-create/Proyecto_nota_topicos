import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotasControlador } from './notas.controlador';
import { NotasServicio } from './notas.servicio';
import { Nota, NotaSchema } from './notas.entidad';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Nota.name, schema: NotaSchema }]),
  ],
  controllers: [NotasControlador],
  providers: [NotasServicio],
})
export class NotasModule {}