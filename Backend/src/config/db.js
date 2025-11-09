//setting up of a db connection
import mysql2 from 'mysql2'
import dotenv from "dotenv"

dotenv.config();
//create pool of connection that can be used
export const pool = mysql2.createPool({
host: 'localhost',
user: 'root',
password:'adm1n',
database:'earthwear'


}).promise()


export const testConnection = async ()=>{
  try {
     const connection = await pool.getConnection();


    console.log("Database Connected Successfully")



    console.log(existingUser)
connection.release();
  } catch (error) {
    console.log("Error Connecting to DB",error)
  }
   
}