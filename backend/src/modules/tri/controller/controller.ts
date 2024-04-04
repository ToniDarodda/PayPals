import { Body, Controller, Post, Req } from '@nestjs/common';
import { TriService } from '../service/service';
import { Tri } from '../../../entities/tri/entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { TriCreateDTO } from '../dto/create';
import { Roles } from '../../authorization/decorator/roles.decorator';
import { Role } from '../../authorization/enum/roles.enum';

@Controller('tri')
export class TriController {
  constructor(private readonly triService: TriService) {}

  @Post()
  @ApiBody({ type: TriCreateDTO })
  @ApiHeader({ name: 'userId', required: true })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Error to handle the request' })
  @ApiConflictResponse({ description: 'Tri already exist' })
  @Roles(Role.User)
  createTri(
    @Req() req: Request,
    @Body() elementsTri: TriCreateDTO,
  ): Promise<Tri> {
    const userId = req.headers['userid'];
    return this.triService.createTri(userId, elementsTri);
  }
}
