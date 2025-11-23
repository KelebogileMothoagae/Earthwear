    import express from "express"
    import { addProducts,getProduct,getProductbyID } from "../controllers/productController.js"

    const router = express.Router();

    router.post("/addProd",addProducts);

    router.get("/getProducts",getProduct);

    router.get("/getProduct/:id",getProductbyID);
    export default router;