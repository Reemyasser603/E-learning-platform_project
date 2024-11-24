import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Module extends Document {
  @Prop({ required: true })
  courseId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [String], default: [] })
  resources: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ModuleSchema = SchemaFactory.createForClass(Module);
