import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import { pool } from "../config/db.js"

//register a user
export const register = async(req,res)=>{
try {
    const {firstName, lastName, email, phone, street,city, state, country, postalcode, userType, userPassword} = req.body;

    const connection = await pool.getConnection();
    console.log("Connected to DB Successfully");

    // Check if user exists
    const [existingUser] = await connection.query("SELECT * FROM Users WHERE Email = ?", [email]);
    if(existingUser.length > 0){
        return res.status(400).json({message: "Email already registered"});
    }

    // Hash password
    const hashedPass = await bcrypt.hash(userPassword, 10);

    // Insert into DB
    const [result] = await connection.query(
        "INSERT INTO Users(firstName, lastName, email, phone, street, city, state, country, postalcode, userType, userPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [firstName, lastName, email, phone,street, city, state, country, postalcode, userType, userPassword]
    );

    // Return response
    res.status(201).json({id: result.insertId, firstName, email});
    
    connection.release(); // Release connection back to pool
} catch (error) {
    console.error(error); // Log the actual error
    res.status(400).json({message: "Error Registering a User"});
}}


//Login User
export const login = async (req, res) => {
    let connection;
    const { email, userPassword } = req.body;

    try {
        // Get connection from pool
        connection = await pool.getConnection();

        // Check if user exists
        const [results] = await connection.query(
            "SELECT * FROM Users WHERE email = ? AND userPassword = ?",
            [email, userPassword]
        );

        if (results.length > 0) {
            return res.status(200).json({ message: "Login successful", user: [results] });
        } else {
            return res.status(400).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        console.error(error); // Log the actual error
        return res.status(500).json({ message: "Error logging in user" });
    } finally {
        if (connection) connection.release(); // always release
    }
};

