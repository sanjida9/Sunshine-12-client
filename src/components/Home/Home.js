import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const Home = () => {
  const [earrings, setEarrings] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/earrings")
      .then((res) => setEarrings(res.data));

    axios.get("http://localhost:5000/getReviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>

      <div className="container">
        <h1 className="fw-bold fs-1 text-center text-blue mt-3">Earrings</h1>
        {earrings.length > 0 ? (
          <div className="row">
            {earrings.slice(0, 3).map((earring) => (
              <>
                <div className="col-md-4 my-3">
                  <Card className="border-0 shadow hover-card">
                    <Card.Img
                      className="img-fluid p-2 "
                      variant="top"
                      src={earring.img}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold text-blue text-center">
                        {earring.name}
                      </Card.Title>
                      <Card.Text className="text-blue text-center">
                        {earring.description.slice(0, 150)}...
                      </Card.Text>
                      <Card.Title className="fw-bold text-blue text-center">
                        ${earring.price}
                      </Card.Title>
                      <div className="text-center">
                        <Link to={`/earring/${earring._id}`}>
                          <Button className="btn-success bg-blue px-5 btnHover">
                            Buy Now
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id="award" className=" p-3">
        <div className="">
          <div className="py-3 ">
            <h2 className="text-blue mt-4  fw-bold text-center">
              Award Winning and Top Rated Seller
            </h2>
            <p className="text-blue  text-center mb-4">
              Call our agents for buy.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center ">
              <div className="iconCardHover py-5 text-white bg-blue  p-2">
                <h1>
                  <i className="fas fa-user-nurse"></i>
                </h1>
                <h1>8000+ Our Local Guides</h1>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconCardHover py-5 text-white bg-blue  p-2">
                <h1>
                  <i className="fas fa-user-shield"></i>
                </h1>
                <h1>100% Trusted Seller</h1>
              </div>
            </div>
            <div className="col-md-3   text-center ">
              <div className="iconCardHover py-5 text-white bg-blue  p-2">
                <h1>
                  <i className="fas fa-user-clock"></i>
                </h1>
                <h1>28+ Years Experience</h1>
              </div>
            </div>
            <div className="col-md-3  text-center ">
              <div className="iconCardHover py-5 text-white bg-blue  p-2">
                <h1>
                  <i className="far fa-laugh-beam"></i>
                </h1>
                <h1> Happy Customers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="review-block">
          <h1 className="fw-bold fs-1 text-center text-blue mt-3">
            Our Reviews
          </h1>
          {reviews.map((review) => (
            <div className="row">
              <div className="col-sm-3">
                <img
                  style={{ width: "100px" }}
                  src={review.img}
                  className="img-rounded"
                  alt=""
                />
              </div>
              <div className="col-sm-9 p-4">
                <Rating
                  className="text-warning"
                  readonly
                  initialRating={review.rating}
                  emptySymbol={<i className="far fa-star text-yellow-500"></i>}
                  fullSymbol={<i className="fa fa-star text-yellow-500"></i>}
                />
                <div className="fw-bold text-danger">{review.fullName}</div>
                <div className="review-block-description text-success">
                  {review.review}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
