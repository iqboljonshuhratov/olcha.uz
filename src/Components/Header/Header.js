import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  Clear = () => {
    this.setState({ search: "" });
  };

  showProducts = () => {
    const product = this.props.basket;
    let listproducts = "";
    product.map((v) => (listproducts += v.title + ", \n"));
    listproducts += "All " + product.length;
    alert(listproducts);
  };

  render() {
    console.log(this.props.tun);
    const n = this.props.basket.length;
    return (
      <header className="shadow ">
        <div className="container-fluid py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="" />
            <button
              className="ms-4 btn"
              onClick={() => this.props.changeHide(false)}
            >
              каталог
            </button>
            <div className="d-flex align-items-center searchbar ms-4">
              <input
                value={this.state.search}
                type="text"
                onChange={(event) => {
                  const value = event.target.value;
                  this.setState({ search: value });
                }}
              />
              <button className="btn tex-center" onClick={this.Clear}>
                X
              </button>
            </div>
          </div>
          <button
            className="btn tex-center btn-danger"
            onClick={this.showProducts}
          >
            карзина
            {(n != 0 && <span className="badge badge-light">{n}</span>) || ""}
          </button>

          <div className="rejim">
            <button
              className={`btn ${(this.props.tun1 && "btn-danger") || ""}`}
              onClick={() => this.props.tunKun(true)}
            >
              ночь
            </button>
            <button
              className={`btn ${(!this.props.tun1 && "btn-danger") || ""}`}
              onClick={() => this.props.tunKun(false)}
            >
              день
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
