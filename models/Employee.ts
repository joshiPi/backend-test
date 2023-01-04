import {model, Schema} from 'mongoose';


export interface EmployeeSchema {
  EmployeeName: string,
  Email: string,
  Mobile: number,
}
const schema = new Schema<EmployeeSchema>({
  EmployeeName: {type: String},
  Email:{type: String},
  Mobile: {type: Number},
})

const Employee = model('employee', schema)

export default Employee;

// 63b266df054791f1c954c75d - prabhat
// 63b26777054791f1c954c75f - p2

// 63b267cb054791f1c954c760 - pr 1
// 63b26859054791f1c954c761 - pr 2
