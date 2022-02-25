import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./index.css";

import PromoPic from "../../assets/img/spaghetti.png";

const Home = () => {
  const navigate = useNavigate();

  const formatRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      maximumSignificantDigits: 4,
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const toProductDetail = () => {
    navigate("/product-detail/");
  };

  useEffect(() => {
    document.title = "Coffee Shop";
  }, []);

  return (
    <>
      <Navbar />
      <Row className="gx-0">
        <Col md={3} lg={3} className="d-none d-lg-block px-0">
          <div className="left__item">
            <p className="promo__text--1">Promo for you</p>
            <p className="promo__text--2">
              Coupons will be updated every weeks.
              <br />
              Check them out!
            </p>
            <div className="card__promo">
              <div className="card__3"></div>
              <div className="card__2"></div>
              <div className="card__1">
                <div className="promo__content"></div>
                <div className="promo__pic">
                  <Image roundedCircle src={PromoPic} />
                </div>
                <div className="promo__discount">
                  <p className="promo__discount--text">Beef Spaghetti</p>
                  <p className="promo__discount--text">20% OFF</p>
                  <p className="promo__discount--desc">
                    Buy 1 Choco Oreo and get 20% off
                    <br />
                    for Beef Spaghetti
                  </p>
                  <div>---------------------------------------</div>
                  <div className="promo__code">
                    <p className="promo__code--title">COUPON CODE</p>
                    <p className="promo__code--text">FNPR15RG</p>
                    <p className="promo__code--desc">
                      valid until October 10th 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="promo__button">
            <Button className="promo__button--apply">Apply Coupon</Button>
          </div>
          <div className="tc">
            <div>
              <p className="fw-bold">Terms and Condition</p>
              <p>1. You can only apply 1 coupon per day</p>
              <p>2. It only for dine in</p>
              <p>3. Buy 1 get 1 only for new user</p>
              <p>4. Should make member card to apply coupon</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={9} lg={9} className="right__column">
          <div className="menu-header d-flex justify-content-around p-4">
            <div className="food-category-list">Favorite Product</div>
            <div className="food-category-list selected-category">Coffee</div>
            <div className="food-category-list">Non Coffee</div>
            <div className="food-category-list">Foods</div>
            <div className="food-category-list">Add-on</div>
          </div>
          <div
            className="
                menu-list
                text-center
                d-flex
                justify-content-start
                flex-wrap
              "
          >
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
            <div className="card-list-menu-item my-4" onClick={toProductDetail}>
              <div>
                <img src={PromoPic} className="menu-item-img" alt="" />
                <div className="menu-item-name mt-2">Spaghetti</div>
                <div className="menu-item-price">{formatRp(10000)}</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
