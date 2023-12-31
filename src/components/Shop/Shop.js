import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import Social from "./Social";
import "./shop.css";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, title: "Album 1", price: 5, img: "Images/Album 1.png" },
        { id: 2, title: "Album 2", price: 15, img: "Images/Album 2.png" },
        { id: 3, title: "Album 3", price: 20, img: "Images/Album 3.png" },
        { id: 4, title: "Album 4", price: 100, img: "Images/Album 4.png" },
        { id: 5, title: "Coffee", price: 5, img: "Images/Cofee.png" },
        { id: 6, title: "Shirt", price: 50, img: "Images/Shirt.png" },
      ],

      shoppingCart: [],
      socials: [
        {
          id: 1,
          href: "https://www.youtube.com",
          img: "Images/YouTube Logo.png",
        },
        {
          id: 2,
          href: "https://www.spotify.com",
          img: "Images/Spotify Logo.png",
        },
        {
          id: 3,
          href: "https://www.facebook.com",
          img: "Images/YouTube Logo.png",
        },
      ],
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }

  addProductToCart(id) {
    let mainproduct = this.state.products.find((obj) => obj.id == id);

    this.setState((prevState) => {
    
      return { shoppingCart: [...prevState.shoppingCart, mainproduct] };
    });
  }

  removeCart(ids) {
   


    console.log(this.state.shoppingCart);

    let newArray = this.state.shoppingCart
    newArray.splice(ids, 1);
    this.setState({ shoppingCart: newArray });
    // }
  }
  removeall() {
  console.log(this.state.shoppingCart);
        this.setState({ shoppingCart:[] });
    // }
  }
  
  render() {
    return (
      <>
        <header class="main-header">
          <nav class="main-nav nav">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </nav>
          <h1 class="band-name band-name-large">react project</h1>
        </header>
        <div>
          <section class="container content-section">
            <div class="shop-items">
              {this.state.products.map((product) => (
                <Product
                  {...product}
                  key={product.id}
                  addProductToCart={this.addProductToCart}
                />
              ))}
            </div>
          </section>
          <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
              <span class="cart-item cart-header cart-column">ITEM</span>
              <span class="cart-price cart-header cart-column">PRICE</span>
              <span class="cart-quantity cart-header cart-column">Doing</span>
            </div>
            <div class="cart-items">
              {this.state.shoppingCart &&
                this.state.shoppingCart.map((obj, index) => {
                  return (
                    <CartProduct
                      {...obj}
                      ids={index}
                      removeCart={this.removeCart}
                    />
                  );
                })}
            </div>
            <button
              class="btn btn-primary btn-purchase"
              type="button"
              onClick={() => this.removeall()}
            >
              Empty Cart
            </button>
          </section>
          <footer class="main-footer">
            <div class="container main-footer-container">
              <h3 class="band-name">The Generics</h3>
              <ul class="nav footer-nav">
                <Social />
              </ul>
            </div>
            {/* <div className=""></div> */}
          </footer>
        </div>
      </>
    );
  }
}
