import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

/**
* DTO para crear una nota.
* Solo acepta título y contenido; id y fechas se generan en el servidor.
*/
export class CrearNotaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  contenido!: string;
}