import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Module } from './schemas/module.schema';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModulesService {
  constructor(@InjectModel(Module.name) private moduleModel: Model<Module>) {}

  async create(createModuleDto: CreateModuleDto): Promise<Module> {
    const newModule = new this.moduleModel(createModuleDto);
    return newModule.save();
  }

  async findAll(): Promise<Module[]> {
    return this.moduleModel.find().exec();
  }

  async findOne(id: string): Promise<Module> {
    return this.moduleModel.findById(id).exec();
  }

  async update(id: string, updateModuleDto: UpdateModuleDto): Promise<Module> {
    return this.moduleModel.findByIdAndUpdate(id, updateModuleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Module> {
    return this.moduleModel.findByIdAndDelete(id).exec();
  }
}
