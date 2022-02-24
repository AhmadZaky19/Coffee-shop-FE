import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./index.css";

import PromoPic from "../../assets/img/spaghetti.png";
import Arrow from "../../assets/icons/arrow.png";

const Product = () => {
  const [active, setActive] = useState("");

  const formatRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      maximumSignificantDigits: 4,
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    document.title = "Coffee Shop | Product";
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Row className="gx-0">
          <Col sm={12} md={5} lg={5} className="my-4">
            <div className="breadcrumbb">
              <p>Favorite & Promo </p>
              <p className="crumb"> {">"} Cold Brew</p>
            </div>
            <div className="product my-4">
              <Image src={PromoPic} roundedCircle className="product__image" />
            </div>
            <div className="delivery__option">
              <p className="delivery__option--title">Delivery and Time</p>
              <div className="d-flex justify-content-start mb-4">
                <Button className="delivery__option--choice--selected">
                  Dine in
                </Button>
                <Button className="delivery__option--choice">
                  Door Delivery
                </Button>
                <Button className="delivery__option--choice">Pick up</Button>
              </div>
              <div className="d-flex delivery__confirm mb-4">
                <div className="d-flex">
                  <h5 className="mt-2 delivery__confirm--text">Now</h5>
                  <Button className="delivery__confirm--choice--selected">
                    Yes
                  </Button>
                  <Button className="delivery__confirm--choice">No</Button>
                </div>
              </div>
              <div>
                <label className="delivery__time--text">Set time</label>
                <input
                  type="text"
                  placeholder="Enter time for reservation"
                  className="delivery__time--input"
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={7} lg={7} className="my-4">
            <h1 className="text-center d-flex flex-wrap justify-content-center mx-5 product__name">
              Spaghetti
            </h1>
            <p className="product__desc mx-5">
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>
            <p className="product__desc mx-5 del__notice">
              Delivery only on <strong>Monday to friday</strong> at{" "}
              <strong>1-7 pm</strong>
            </p>
            <div className="d-flex mx-5 my-3 summary">
              <div className="d-flex my-4">
                <div className="quantity__minus">-</div>
                <div className="quantity__number">2</div>
                <div className="quantity__plus">+</div>
              </div>
              <div className="total">{formatRp(10000)}</div>
            </div>
            <div className="size__mobile">
              <h1 className="size__title">Choose a size</h1>
              <div className="d-flex size__option">
                <div className="size__option--button">R</div>
                <div className="size__option--button">L</div>
                <div className="size__option--button">XL</div>
              </div>
            </div>
            <Button className="button__cart mx-5 my-3">Add to Cart</Button>
            <Button className="button__staff mx-5 my-2">Ask a Staff</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="size">
              <h1 className="size__title">Choose a size</h1>
              <div className="d-flex size__option">
                <div className="size__option--button">R</div>
                <div className="size__option--button">L</div>
                <div className="size__option--button">XL</div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} lg={8} className="d-none d-lg-block">
            <div className="size mx-5">
              <Row>
                <Col xs={5} sm={5} md={2}>
                  <div className="product__checkout--img">
                    <Image
                      src={PromoPic}
                      roundedCircle
                      className="product__checkout--image"
                    />
                  </div>
                </Col>
                <Col xs={5} sm={5} md={5}>
                  <div className="product__checkout--desc">
                    <p className="product__checkout--desc--name">SPAGHETTI</p>
                    <p>x1 (Large)</p>
                    <p>x1 (Regular)</p>
                  </div>
                </Col>
                <Col
                  xs={5}
                  sm={5}
                  md={3}
                  className="product__checkout--desc--checkout"
                >
                  Checkout
                </Col>
                <Col xs={5} sm={5} md={2}>
                  <div className="product__checkout--arrow">
                    <Image
                      src={Arrow}
                      className="product__checkout--arrow--icon"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Product;
