import { Schema, Document, Date, model } from "mongoose";
import Employee, { EmployeeSchema } from "./Employee";

export interface ProjectDataSchema {
  ProjectId: Schema.Types.ObjectId
  DateJoined: Date
}

export interface EmployeeProjectSchema extends Document{
  EmployeeId: EmployeeSchema,
  ProjectData:Array<ProjectDataSchema>,
}

const schema = new Schema<EmployeeProjectSchema>({
  EmployeeId: {type: Schema.Types.ObjectId, ref: Employee, required: true},
  ProjectData: [
    {ProjectId: {
      type: Schema.Types.ObjectId,
      ref: 'project'
    },
    DateJoined: {
      type: Date
    }
  }
  ]
})

const EmployeeProject = model('employeeProject', schema)

export default EmployeeProject;