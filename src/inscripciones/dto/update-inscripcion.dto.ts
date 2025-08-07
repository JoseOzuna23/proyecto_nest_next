import { PartialType } from '@nestjs/mapped-types';
import { CreateInscripcioneDto } from './create-inscripcion.dto';

export class UpdateInscripcioneDto extends PartialType(CreateInscripcioneDto) {}
