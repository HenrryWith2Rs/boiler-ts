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

    return res.status(200).json(user).end();
  } catch (error) {
    const functionName = testGet.name;
    console.log(`Error on ${functionName} -> `, error);
  }
};
