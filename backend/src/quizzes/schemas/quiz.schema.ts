import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Quiz extends Document {
  @Prop({ required: true })
  moduleId: string;

  @Prop({ type: [Object], required: true })
  questions: object[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
