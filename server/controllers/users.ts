import { Response } from "express";
import { usersModel } from "../models";

export const getUsers =  async (_:any, res: Response) => {
  const users = await usersModel.getUsers();
  return res.json(users);
}

export const postUsers = async (_:any, res: Response) => {
  const users = await usersModel.postUsers();
  return res.json(users);
}

export const putUsers = async (_:any, res: Response) => {
 const users = await usersModel.putUsers();
  return res.json(users);
}

export const deleteUsers = async (_:any, res: Response) => {
  const users = await usersModel.deleteUsers();
  return res.json(users);
}

export const getUser = async (_:any, res: Response) => {
  const users = await usersModel.getUser();
  return res.json(users);
}
