import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { Module as ModuleEntity, ModuleSchema } from './schemas/module.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleEntity.name, schema: ModuleSchema }])],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
