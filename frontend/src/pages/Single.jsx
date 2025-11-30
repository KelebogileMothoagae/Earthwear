import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Single = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProd = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/getProduct/${id}`);
                const data = await response.json();

                if (data.product) {
                    // Extract "product_6.png" from "./src/assets/product_6.png"
                    const filename = data.product.image.split("/").pop();
                    const finalUrl = `/assets/${filename}`;

                    const formattedProduct = {
                        ...data.product,
                        images: [finalUrl], // array required for thumbnails
                        reviews: data.product.reviews || []
                    };

                    setProduct(formattedProduct);
                    setMainImage(finalUrl);
                } else {
                    setError("Product not found");
                }
            } catch (err) {
                console.log("Error fetching product:", err);
                setError("Error fetching product");
            } finally {
                setLoading(false);
            }
        };

        fetchProd();
    }, [id]);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const item = {
            productID: product.productID,
            name: product.productName,
            price: product.price,
            image: product.images,
            quantity: 1
        };

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart!");
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    if (!product) return <h2>Product not found</h2>;

    return (
        <>
            <Navbar />

            <div className="container single_product_container">

                <div className="row">

                    {/* LEFT - Images */}
                    <div className="col-lg-7">
                        <div className="single_product_pics">
                            <div className="row">

                                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                    <ul className="single_product_thumbnails">
                                        {product.images.map((img, index) => (
                                            <li
                                                key={index}
                                                className={mainImage === img ? "active" : ""}
                                                onClick={() => setMainImage(img)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img src={img} alt="thumb" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-lg-9 image_col order-lg-2 order-1">
                                    <div
                                        className="single_product_image_background"
                                        style={{
                                            backgroundImage: `url(${mainImage})`,
                                            height: "400px",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Details */}
                    <div className="col-lg-5">
                        <div className="product_details">
                            <h2>{product.productName}</h2>
                            <p>{product.prodDescription}</p>

                            <div className="product_price">${product.price}</div>
                            <div>Category: {product.category}</div>
                            <div>Stock: {product.quantity}</div>

                            <button
                                onClick={handleAddToCart}
                                className="btn btn-primary mt-3"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>

                {/* REVIEWS */}
                <div className="reviews_section mt-5">
                    <h3>Reviews ({product.reviews.length})</h3>

                    {product.reviews.map((review, index) => (
                        <div key={index} className="user_review_container d-flex flex-column flex-sm-row mt-3">
                            <div className="user_pic"></div>
                            <div className="review ms-3">
                                <div className="review_date">{review.date}</div>
                                <div className="user_name">{review.name}</div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Single;
