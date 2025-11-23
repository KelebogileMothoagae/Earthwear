

const Navbar = ()=>{

return<>


      <header className="header trans_300">
        <div className="main_nav_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-right">
                <div className="logo_container">
                  <a href="#">
                    Earth<span>Wear</span>
                  </a>
                </div>
                <nav className="navbar">
                  <ul className="navbar_menu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="contact.html">Login</a></li>
                  </ul>
                  <ul className="navbar_user">
                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                    <li className="checkout">
                      <a href="#">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span id="checkout_items" className="checkout_items">2</span>
                      </a>
                    </li>
                  </ul>
                  <div className="hamburger_container">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="fs_menu_overlay"></div>
      <div className="hamburger_menu">
        <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item has-children">
              <a href="#">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li><a href="#">cad</a></li>
                <li><a href="#">aud</a></li>
                <li><a href="#">eur</a></li>
                <li><a href="#">gbp</a></li>
              </ul>
            </li>

            <li className="menu_item has-children">
              <a href="#">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
              </ul>
            </li>

            <li className="menu_item"><a href="#">home</a></li>
            <li className="menu_item"><a href="#">shop</a></li>
            <li className="menu_item"><a href="#">contact</a></li>
            <li className="menu_item"><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
    </>




}


export default Navbar;