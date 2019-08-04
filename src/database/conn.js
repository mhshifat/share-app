/* eslint-disable no-console */
import mongoose from "mongoose";
import { dbUrl } from "../config/config";

export default async () => {
  try {
    await mongoose.connect(
      dbUrl,
      {
        useNewUrlParser: true,
        useCreateIndex: false,
        useFindAndModify: false
      },
      () => {
        console.log(
          "[ SHARE ] >>>>> Database connection has been established!"
        );
      }
    );
  } catch (err) {
    console.log(err);
    console.error("[ SHARE ] >>>>> Database connection failed!");
  }
};
