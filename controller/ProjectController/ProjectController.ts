import {Request, Response} from 'express';
import getNameAndCount from "../../services/Project.service";

export const getData = async (req: Request, res: Response) => {
  const {limit = 1, page = 1} = req.query
  try {
    const data = await getNameAndCount(+limit, +page)
    return res.status(200).json(data)
  } catch (err) {
    return res.status(400).json(err)
  }
}