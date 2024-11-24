import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  difficultyLevel: string;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
