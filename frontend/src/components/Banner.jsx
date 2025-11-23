import sliderImg from "../assets/slider_1.jpg";
import bannerImg1 from "../assets/banner_1.jpg";
import bannerImg2 from "../assets/banner_2.jpg";
import bannerImg3 from "../assets/banner_3.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="main_slider"
        style={{ backgroundImage: `url(${sliderImg})` }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Spring / Summer Collection 2017</h6>
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button">
                  <a href="#">shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bannerImg1})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">women's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bannerImg2})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">accessories's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bannerImg3})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
