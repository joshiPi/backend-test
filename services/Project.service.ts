import EmployeeProject from "../models/EmployeeProject"

const getNameAndCount = async(limit: number, page: number) => {
  const data = await EmployeeProject
  .aggregate([
    {
      "$lookup" : {
        "from": "employees",
        "localField": "EmployeeId",
        "foreignField": "_id",
        "as": "combined"
      }
    },
    {
      "$unwind" : "$combined"
    },
    {
      "$set": {
        "Name": "$combined.EmployeeName",
        "Count": {
          "$size" : "$ProjectData"
        }
      }
    },
    {
      "$project": {
        "combined": 0,
        "ProjectData":0,
        "EmployeeId": 0
        
      }
    },
    {
      "$skip" : +limit*(+page - 1)
    },
    {
      "$limit" : +limit
    },
  ])
  return data
}

export default getNameAndCount