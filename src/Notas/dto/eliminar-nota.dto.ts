import { IsArray, IsString } from 'class-validator';

export class EliminarNotaDto {
  @IsArray()
  @IsString({ each: true })
  titulos!: string[];
}