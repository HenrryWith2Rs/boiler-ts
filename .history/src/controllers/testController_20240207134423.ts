// controllers/testController.ts
import express, { Request, Response } from 'express';

export const testGet = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.query;
    console.log('email', email);
    console.log('password', password);

    const user = {
      email: email,
      password: password,
    };
  } catch (error) {}
};
