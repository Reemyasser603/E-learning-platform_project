import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  async findAll() {
    return this.modulesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.modulesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.modulesService.update(id, updateModuleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.modulesService.remove(id);
  }
}
