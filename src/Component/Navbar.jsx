import React from 'react'

function Navbar(props) {
    return (
        <div>
            <header className='small'>
                <div id='ThisHiddentwo'>
                    <nav className={"navbar navbar-expand-lg"} style={props.mystyle}>
                        <div className="container-fluid">

                            <div className='myDis' id='thisDis'>  <span className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path id='svgnone' d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z" fill="currentColor"></path><g fill="#fff"><path d="M17.466 21.624c-.514 0-.988-.316-1.146-.829-.198-.632.138-1.303.771-1.501l7.666-2.469-1.205-8.254-13.317 4.621a1.19 1.19 0 0 1-1.521-.75 1.19 1.19 0 0 1 .751-1.521l13.89-4.818c.553-.197 1.166-.138 1.64.158a1.82 1.82 0 0 1 .85 1.284l1.344 9.183c.138.987-.494 1.994-1.482 2.33l-7.864 2.528-.375.04zm7.31.138c-.178-.632-.85-1.007-1.482-.81l-5.177 1.58c-2.331.79-3.28.02-3.418-.099l-6.56-8.412a4.25 4.25 0 0 0-4.406-1.758l-3.122.987c-.237.889-.415 1.777-.514 2.686l4.228-1.363a1.84 1.84 0 0 1 1.857.81l6.659 8.551c.751.948 2.015 1.323 3.359 1.323.909 0 1.857-.178 2.687-.474l5.078-1.54c.632-.178 1.008-.829.81-1.481z"></path><use href="#czlogo"></use><use href="#czlogo" x="8.516" y="-2.172"></use></g><defs><path id="czlogo" d="M18.689 28.654a1.94 1.94 0 0 1-1.936 1.935 1.94 1.94 0 0 1-1.936-1.935 1.94 1.94 0 0 1 1.936-1.935 1.94 1.94 0 0 1 1.936 1.935z"></path></defs></svg>
                                {/* <img id='nonefav' src="https://cartzilla.createx.studio/assets/img/intro/features/vector.png" alt="img" /> */}
                                <img id='nonefav' src="https://cartzilla.createx.studio/assets/img/intro/features/vector.png" alt="img" />

                            </span> <h3 id='Lolo'>CartZilla</h3></div>

                            <ul className={"nav justify-content-center "} id='mcone' >
                                <li id='mctwo' className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={props.mystyle}>
                                        Home
                                    </a>
                                    <ul className="dropdown-menu" style={props.mystyle} >
                                        <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div> </a>

                                        </li>
                                        <li><a className="dropdown-item" href="#">Fashion Store v.1 <div className='mysmaler'>Hero promo slider</div> </a>

                                        </li>
                                        <li><a className="dropdown-item" href="#">Fashion Store v.2 <div className='mysmaler'>Hero banner with hotspots</div> </a>

                                        </li>
                                        <li><a className="dropdown-item" href="#">Furniture Store <div className='mysmaler'>Fancy product carousel</div> </a>

                                        </li>
                                        <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Hero slider + Category cards</div> </a>

                                        </li>
                                    </ul>
                                </li>




                                <li id='mctwo' className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul className="dropdown-menu" style={props.mystyle} >
                                        <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div>
                                            <div className='mysmaler'>Catalog with Side Filters</div>
                                            <div className='mysmaler'>Product General Info</div>
                                            <div className='mysmaler'>Product Details</div>
                                            <div className='mysmaler'>Product Reviews</div>
                                        </a>

                                        </li>

                                        {/* <br /> */}
                                        <li><a className="dropdown-item" href="#">Fashion Store<div className='mysmaler'>Catalog with Side Filters</div>
                                            <div className='mysmaler'>Product Page</div>
                                        </a>

                                        </li>

                                        <div>
                                            <li><a className="dropdown-item" href="#">Fashion Store<div className='mysmaler'>Catalog with Side Filters</div>
                                                <div className='mysmaler'>Product Page</div>
                                            </a>

                                            </li>
                                        </div>


                                        <li><a className="dropdown-item" href="#">Furniture Store<div className='mysmaler'>Catalog with Top Filters</div>
                                            <div className='mysmaler'>Product Page</div>
                                        </a>

                                        </li>



                                        <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Catalog with Side Filters</div>
                                            <div className='mysmaler'>Product Page</div>
                                            <div className='mysmaler'>Product General Info</div>
                                            <div className='mysmaler'>Product Details</div>
                                            <div className='mysmaler'>Product Reviews</div>
                                        </a>

                                        </li>
                                    </ul>
                                </li>





                                <li id='mctwo' className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul className="dropdown-menu" style={props.mystyle} >
                                        <li><a className="dropdown-item" href="#">Auth Pages</a></li>
                                        <li><a className="dropdown-item" href="#">Orders History</a></li>
                                        <li><a className="dropdown-item" href="#">Wishlist</a></li>
                                        <li><a className="dropdown-item" href="#">Payment Methods</a></li>
                                        <li><a className="dropdown-item" href="#">My Reviews</a></li>
                                        <li><a className="dropdown-item" href="#">Personal Info</a></li>
                                        <li><a className="dropdown-item" href="#">Addresses</a></li>
                                        <li><a className="dropdown-item" href="#">Notifications</a></li>
                                    </ul>
                                </li>

                                <li id='mctwo' className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" style={props.mystyle} >
                                        <li><a className="dropdown-item" href="#">About</a></li>
                                        <li><a className="dropdown-item" href="#">Blog</a></li>
                                        <li><a className="dropdown-item" href="#">Contact</a></li>
                                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                                        <li><a className="dropdown-item" href="#">404 Error</a></li>
                                        <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                                    </ul>
                                </li>
                                <li id='mctwo' className="nav-item">
                                    <a className="nav-link disabled" style={props.mystyle} aria-disabled="true">Docs</a>
                                </li>

                                <li id='mctwo' className="nav-item">
                                    <a className="nav-link disabled" style={props.mystyle} aria-disabled="true"><i className="fa-solid fa-cart-shopping"></i>Components</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                {/* <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode}
                            </div> */}

                                <label class="switch2" >
                                    <input type="checkbox" onClick={props.toggleBtn} />{props.setMode}
                                    <span class="slider"></span>
                                </label>
                                &nbsp; &nbsp;
                                <button className="btn btn-outline-success" id='mcthree' type="submit" style={props.mystyle} ><i className="bi bi-cart2"></i>Buy Now</button>
                            </form>
                        </div>
                    </nav>
                    <br />
                </div>





            </header>






            <section id={"ThisHidden"} style={props.mystyle} >


                <div style={props.mystyle}>
                    <br />
                    <nav className={"navbar my10 bg-body-tertiary fixed-top "}>

                        <div className="container-fluid" style={props.mystyle}>

                            <div classNameName='myDiv'><div class="form-check form-switch">
                                {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode} */}

                            </div>


                                <h2 style={props.mystyle}>CartZilla</h2></div>
                            <div id='flecx'>
                                <input id="checkbox" type="checkbox" />
                                <label class="switch" for="checkbox" onClick={props.toggleBtn}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="slider">
                                        <path
                                            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                                        ></path>
                                    </svg>
                                </label>
                                <button className="navbar-toggler " id='bgtoggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"  ></span>

                                </button>
                            </div>

                            <div className="offcanvas offcanvas-end" style={props.mystyle} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="form-check form-switch" style={props.mystyle}>

                                </div>
                                <div className="offcanvas-header" style={props.mystyle}>
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Browse CartZilla</h5>
                                    <button type="button" id='bgtogglei' className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body  flex-column" >
                                    <ul className="navbar-nav justify-content-end  ">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </a>
                                            <ul className="dropdown-menu" style={props.mystyle} >
                                                <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div> </a>

                                                </li>
                                                <li><a className="dropdown-item" href="#">Fashion Store v.1 <div className='mysmaler'>Hero promo slider</div> </a>

                                                </li>
                                                <li><a className="dropdown-item" href="#">Fashion Store v.2 <div className='mysmaler'>Hero banner with hotspots</div> </a>

                                                </li>
                                                <li><a className="dropdown-item" href="#">Furniture Store <div className='mysmaler'>Fancy product carousel</div> </a>

                                                </li>
                                                <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Hero slider + Category cards</div> </a>

                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Shop
                                            </a>
                                            <ul className="dropdown-menu" style={props.mystyle} >
                                                <li><a className="dropdown-item" href="#">Electronics Store <div className='mysmaler'>Megamenu + Hero Slider</div>
                                                    <div className='mysmaler'>Catalog with Side Filters</div>
                                                    <div className='mysmaler'>Product General Info</div>
                                                    <div className='mysmaler'>Product Details</div>
                                                    <div className='mysmaler'>Product Reviews</div>
                                                </a>

                                                </li>

                                                {/* <br /> */}
                                                <li><a className="dropdown-item" href="#">Fashion Store<div className='mysmaler'>Catalog with Side Filters</div>
                                                    <div className='mysmaler'>Product Page</div>
                                                </a>

                                                </li>


                                                <li><a className="dropdown-item" href="#">Furniture Store<div className='mysmaler'>Catalog with Top Filters</div>
                                                    <div className='mysmaler'>Product Page</div>
                                                </a>

                                                </li>



                                                <li><a className="dropdown-item" href="#">Grocery Store <div className='mysmaler'>Catalog with Side Filters</div>
                                                    <div className='mysmaler'>Product Page</div>
                                                    <div className='mysmaler'>Product General Info</div>
                                                    <div className='mysmaler'>Product Details</div>
                                                    <div className='mysmaler'>Product Reviews</div>
                                                </a>

                                                </li>
                                            </ul>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Account
                                            </a>
                                            <ul className="dropdown-menu" style={props.mystyle} >
                                                <li><a className="dropdown-item" href="#">Auth Pages</a></li>
                                                <li><a className="dropdown-item" href="#">Orders History</a></li>
                                                <li><a className="dropdown-item" href="#">Wishlist</a></li>
                                                <li><a className="dropdown-item" href="#">Payment Methods</a></li>
                                                <li><a className="dropdown-item" href="#">My Reviews</a></li>
                                                <li><a className="dropdown-item" href="#">Personal Info</a></li>
                                                <li><a className="dropdown-item" href="#">Addresses</a></li>
                                                <li><a className="dropdown-item" href="#">Notifications</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" style={props.mystyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu" style={props.mystyle} >
                                                <li><a className="dropdown-item" href="#">About</a></li>
                                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                                <li><a className="dropdown-item" href="#">Contact</a></li>
                                                <li><a className="dropdown-item" href="#">Help Center</a></li>
                                                <li><a className="dropdown-item" href="#">404 Error</a></li>
                                                <li><a className="dropdown-item" href="#">Terms & Conditions</a></li>
                                            </ul>                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" style={props.mystyle} aria-disabled="true">Docs</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link disabled" style={props.mystyle} aria-disabled="true">Components</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
                <br />
            </section>

        </div>
    )
}

export default Navbar
