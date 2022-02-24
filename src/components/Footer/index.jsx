import React from "react";
import { Row, Col } from "react-bootstrap";

import Logo from "../../assets/icons/logo.png";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/instagram.png";

import "./index.css";

const Footer = () => {
  return (
    <>
      <Row className="footer gx-0">
        <Col sm={12} md={8} lg={8}>
          <div className="d-flex brand">
            <img src={Logo} alt="" className="brand__logo--footer" />
            <p className="brand__name">Coffee Shop</p>
          </div>
          <p className="brand__desc">
            Coffee Shop is a store that sells some good <br /> meals, and
            especially coffee. We provide <br /> high quality beans
          </p>
          <div className="d-flex media__icons">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p className="footer__text--desktop">©2020CoffeeStore</p>
        </Col>
        <Col sm={12} md={2} lg={2}>
          <div className="section">
            <p className="section__title">Product</p>
            <div className="section__menu">
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={2} lg={2}>
          <div className="section">
            <p className="section__title">Engage</p>
            <div className="section__menu">
              <p>Coffee Shop ?</p>
              <p>FAQ</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </Col>
        <p className="footer__text--mobile text-center">©2020CoffeeStore</p>
      </Row>
    </>
  );
};

export default Footer;
