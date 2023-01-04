import { model, Schema } from "mongoose";

export interface ProjectSchema{
  ProjectId: string,
  ProjectName:string,
}

const schema = new Schema({
  ProjectId: {type: String},
  ProjectName:{type: String},
})

const Project = model('project', schema)

export default Project