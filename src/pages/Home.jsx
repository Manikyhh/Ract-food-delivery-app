import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import pizzachef from "../assets/images/pizza-chef.jpg";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6 mt-5">
              <div className="hero__content">
                <h5 className="mb-3">
                  Freshly baked pizzas. Served in 3 minutes 24/7
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>
                <h6>
                  <span>The perfect slice of life</span>
                </h6>
                <button className="order__btn d-flex align-items-center justify-content-center mt-5">
                  <Link to="/pizzas">
                    <span>
                      View Menu <i className="ri-arrow-right-s-line"></i>
                    </span>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={pizzachef} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
