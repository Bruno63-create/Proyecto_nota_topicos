import { Controller, Post, Body } from '@nestjs/common';
import { NotasServicio } from './notas.servicio';
import { CrearNotaDto } from './dto/crear-nota.dto';
import { Get, Param } from '@nestjs/common';

//import { Get, Param } from '@nestjs/common';
import { NotaDetalleDto } from './dto/nota-detalle.dto';

import { Delete } from '@nestjs/common';
import { EliminarNotaDto } from './dto/eliminar-nota.dto';

import { Put } from '@nestjs/common';
import { ActualizarNotaDto } from './dto/actualizar-nota.dto';



@Controller('notas')
export class NotasControlador {
  constructor(private readonly servicio: NotasServicio) {}

  @Post()
  crear(@Body() dto: CrearNotaDto) {
    return this.servicio.crear(dto);
  }

  @Get()
  listar() {
    return this.servicio.listar();
  }

  @Get(':titulo')
    async obtenerPorTitulo(@Param('titulo') titulo: string): Promise<NotaDetalleDto> {
    return this.servicio.obtenerPorTitulo(titulo);
    }

  @Delete()
eliminar(@Body() dto: EliminarNotaDto) {
  return this.servicio.eliminar(dto);
}
  
    @Put(':titulo')
actualizarPorTitulo(
  @Param('titulo') titulo: string,
  @Body() dto: ActualizarNotaDto
) {
  return this.servicio.actualizarPorTitulo(titulo, dto);
}


}
