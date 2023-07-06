import * as mongoose from 'mongoose';

export const PiskiSchema = new mongoose.Schema({
  title: {type: String, required: true}, 
  size: {type: Number, required: true}, 
  description: {type: String, required: true}
});

export interface Piski extends mongoose.Document {
  id: string, 
  title: string, 
  size: number, 
  description: string
}