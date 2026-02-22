import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const env = {
    DATABASE_URL: process.env.DATABASE_URL,
};