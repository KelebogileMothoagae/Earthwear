import { pool } from "../config/db.js"



//add products to  db
export const addProducts = async (req, res) => {
    try {
        //items to gather from the body
        const { productName, description, price, quantity, category } = req.body;

        const connection = await pool.getConnection();

        //check if the connection exists
        const [existingProd] = await connection.query("SELECT * FROM Products WHERE productName = ?", [productName]);

        if (existingProd.length > 0) {
            return res.status(400).json({ message: "Product Already Exists" })
        }

        //ensure that quantity is an integer and price is double 


        //insert product into the db
        const [result] = await connection.query("INSERT INTO Products(productName, prodDescription, price, quantity, category) VALUES(?, ?, ?, ?, ?)", [productName, description, price, quantity, category]);



        // Return response
        res.status(201).json({ id: result.insertId, productName });

        connection.release();

    } catch (error) {
        console.log("Error adding product", error)
        return res.status(401).json({ message: "Error adding a product" })
    }

}

//get products

export const getProduct = async (req, res) => {
    try {
        const connection = await pool.getConnection();

        const [results] = await connection.query("SELECT * FROM Products");

         // Return response
        res.status(201).json( [results] );

        connection.release();
    } catch (error) {
        
         res.status(201).json( [results] );
         console.log("Error: Could not get Products",error)
    }


}



//get all product by id
export const getProductbyID = async (req, res) => {
 try {
        const connection = await pool.getConnection();
        //parameter
        const {productID} = req.body;
        const [results] = await connection.query("SELECT * FROM Products WHERE productID =?",[productID]);


         // Return response
         if(results.length > 0){
        res.status(201).json( [results] );
         }else{
            
         }

        connection.release();
    } catch (error) {
        
         res.status(400).json( "Error Fetching Products");
         console.log("Error: Could not get Products",error)
    }

}
