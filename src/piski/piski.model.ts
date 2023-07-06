import * as mongoose from 'mongoose';

export const PiskiSchema = new mongoose.Schema({
  title: {type: String, required: true}, 
  size: {type: Number, required: true}, 
  description: {type: String, required: true}
});

export class Piski {
  constructor(
    public id: string, 
    public title: string, 
    public size: number, 
    public description: string
    ) {}
}