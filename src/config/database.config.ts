
import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
  uri: process.env.MONGO_URI || 'mongodb+srv://asadillohdeveloper05_db_user:Asadilloh2004@cluster0.yewbxk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test',
};