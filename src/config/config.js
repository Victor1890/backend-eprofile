import { config } from "dotenv";
config();

export default {
  SECRET: process.env.KEY_SECRET,
  TOKEN: process.env.TOKEN_SECRET,
  DB_CONNECTION: process.env.DB_CONNECTION,
};
