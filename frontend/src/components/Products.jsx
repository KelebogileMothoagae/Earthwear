import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



const Products = () => {
  const [products, setProducts] = useState([]);
  const [productImage, setproductImage] = useState();
  useEffect(() => {
    const fetchProd = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/getProducts");
        const data = await response.json();
        setProducts(data[0]);

        const filename = data.product.image.split("/").pop();
        const finalUrl = `/assets/${filename}`;

        setproductImage(finalUrl);

        console.log("data" + products);
      } catch (error) {
        console.log("Error Fetching products");
      }
    }

    fetchProd();
  }, []);



  return (
    <>
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                    data-filter="*"
                  >
                    all
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".women"
                  >
                    women's
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".accessories"
                  >
                    accessories
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".men"
                  >
                    men's
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                className="product-grid"
                data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
              >
                {
                  products.map((product) => (

                    <div className={"product-item men"} key={product.productID}>
                      <div className="product discount product_filter">

                        <div className="product_image">
                          <Link to={`/product/${product.productID}`}>

                            <img src={`/assets/${product.image.split("/").pop()}`} alt="" />
                          </Link>
                        </div>

                        <div className="favorite favorite_left"></div>

                        <div className="product_info">

                          <h6 className="product_name">

                            {product.productName}

                          </h6>

                          <div className="product_price">
                            R {product.price}
                          </div>

                        </div>

                      </div>

                      <div className="red_button add_to_cart_button">
                        <button onClick={() => console.log("clicked product ID" + product.productID)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))
                }

              </div>


            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Products;
