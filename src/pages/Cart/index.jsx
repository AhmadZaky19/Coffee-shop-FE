import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./index.css";

import Spaghetti from "../../assets/img/spaghetti.png";
import Card from "../../assets/icons/icon-card.svg";
import Bank from "../../assets/icons/icon-bank.svg";
import Delivery from "../../assets/icons/icon-deliv.svg";

const Cart = () => {
  const formatRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      maximumSignificantDigits: 4,
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    document.title = "Coffee Shop | Cart";
  }, []);

  return (
    <>
      <Navbar />
      <Row className="gx-0 cart__content">
        <Col xs={12} sm={12} md={6} lg={6}>
          <div>
            <h1 className="left__title">
              Checkout your <br /> item now!
            </h1>
            <div className="cart__content--left">
              <div className="cart__content--left--title">
                <h2>Order Summary</h2>
              </div>
              <div>
                <Row>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <img src={Spaghetti} alt="" className="order__img" />
                  </Col>
                  <Col xs={5} sm={5} md={3} lg={5} className="order__summary">
                    <p className="order__name">Spaghetti</p>
                    <p className="order__quantity">x 1</p>
                    <p className="order__size">Regular</p>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    className="order__summary--price"
                  >
                    {formatRp(10000)}
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <img src={Spaghetti} alt="" className="order__img" />
                  </Col>
                  <Col xs={5} sm={5} md={3} lg={5} className="order__summary">
                    <p className="order__name">Spaghetti</p>
                    <p className="order__quantity">x 1</p>
                    <p className="order__size">Large</p>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    className="order__summary--price"
                  >
                    {formatRp(10000)}
                  </Col>
                </Row>
                <div className="order__line"></div>
              </div>
              <div className="order__summary--price--cart">
                <div className="order__summary--price--cart--part">
                  <p className="order__summary--price--cart--desc">SUBTOTAL</p>
                  <p className="order__summary--price--cart--desc">
                    {formatRp(100000)}
                  </p>
                </div>
                <div className="order__summary--price--cart--part">
                  <p className="order__summary--price--cart--desc">
                    TAX & FEES
                  </p>
                  <p className="order__summary--price--cart--desc">
                    {formatRp(10000)}
                  </p>
                </div>
                <div className="order__summary--price--cart--part">
                  <p className="order__summary--price--cart--desc">SHIPPING</p>
                  <p className="order__summary--price--cart--desc">
                    {formatRp(20000)}
                  </p>
                </div>
              </div>
              <div className="order__summary--price--cart--total">
                <p className="order__summary--price--cart--desc1">TOTAL</p>
                <p className="order__summary--price--cart--desc1">
                  {formatRp(130000)}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div>
            <div className="right__title">
              <p className="right__title--1">Address details</p>
              <p className="right__title--2">edit</p>
            </div>
            <div className="cart__content--right">
              <div className="cart__content--address">
                <p>
                  <strong>Delivery</strong> to Iskandar Street
                </p>
                <div className="order__line--2"></div>
                <p>
                  Km 5 refinery road oppsite re public road, effurun, Jakarta
                </p>
                <div className="order__line--2"></div>
                <p>+6282281818181</p>
              </div>
            </div>
          </div>
          <div>
            <div className="right__title">
              <p className="right__title--1">Payment method</p>
            </div>
            <div className="cart__content--right">
              <div className="form__check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <figure className="card__item">
                    <img src={Card} alt="" />
                  </figure>
                  Card
                </label>
              </div>
              <div className="order__line--2"></div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <figure className="bank__item">
                    <img src={Bank} alt="" />
                  </figure>
                  Bank account
                </label>
              </div>
              <div className="order__line--2"></div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  <figure className="deliv__item">
                    <img src={Delivery} alt="" />
                  </figure>
                  Cash on delivery
                </label>
              </div>
            </div>
            <Button className="pay__confirmation">Confirm and Pay</Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Cart;
