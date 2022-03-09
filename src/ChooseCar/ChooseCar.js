import React, { Component } from "react";

export default class ChooseCar extends Component {
  state = {
    imgSrc: require("../asset/products/black-car.jpg"),
  };
  renderImg = (link) => {
    this.setState({ imgSrc: link });
  };
  render() {
    return (
      <div className="container-fluid mt-5">
        <h1 className="text-center text-info mb-5">
          Choose the perfect car color for you
        </h1>
        <div className="row">
          <div className="col-7">
            <img src={this.state.imgSrc} alt="photo1" className="w-100" />
          </div>
          <div className="col-5">
            <div className="card text-primary bg-white">
              <div className="card-header">Exterior color</div>
              <div className="card-body">
                <div
                  className="row border border-light"
                  onClick={() => {
                    this.renderImg(require("../asset/products/black-car.jpg"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-2 ">
                    <img
                      src={require("../asset/icons/icon-black.jpg")}
                      alt="icon"
                      className="img-fluid pt-2 pb-2"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h5 className="card-title mt-2">Crystal black</h5>
                    <p className="card-text">Pearl</p>
                  </div>
                </div>
                <div
                  className="row border border-light"
                  onClick={() => {
                    this.renderImg(require("../asset/products/red-car.jpg"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-2 ">
                    <img
                      src={require("../asset/icons/icon-red.jpg")}
                      alt="icon"
                      className="img-fluid pt-2 pb-2"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h5 className="card-title mt-2">Modern Steel</h5>
                    <p className="card-text">Metalic</p>
                  </div>
                </div>
                <div
                  className="row border border-light"
                  onClick={() => {
                    this.renderImg(require("../asset/products/silver-car.jpg"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-2 ">
                    <img
                      src={require("../asset/icons/icon-silver.jpg")}
                      alt="icon"
                      className="img-fluid pt-2 pb-2"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h5 className="card-title mt-2">Lunar silver</h5>
                    <p className="card-text">Metalic</p>
                  </div>
                </div>
                <div
                  className="row border border-light"
                  onClick={() => {
                    this.renderImg(require("../asset/products/steel-car.jpg"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-2 ">
                    <img
                      src={require("../asset/icons/icon-steel.jpg")}
                      alt="icon"
                      className="img-fluid pt-2 pb-2"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h5 className="card-title mt-2">Rallye Red</h5>
                    <p className="card-text">Metalic</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">Wheels</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
