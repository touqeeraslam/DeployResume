import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
const star = <FontAwesomeIcon icon={faStar} size="lg" />;
export default function rating() {
  return (
    <>
      <div className="row bg-primary">
        <div className=" mx-5">
          <div className="col-lg-3 col-md-4 col-sm-5 col-10 ">
            <h4 className="">Great</h4>
            <span className="star-icons">
              {star} {star}
              {star} {star} <span className="text-warning">{star}</span>{" "}
            </span>
            <p>
              Based on <u>10m reviews</u>
            </p>
            <h5>
              {" "}
              <span className="text-success">{star}</span> Trustpilot
            </h5>
          </div>
        </div>
            <div className="main row">
          <Carousel>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10  ">
                  <h4 className="">Fablous</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10 ">
                  <h4 className="">Nice</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10  ">
                  <h4 className="">Awesome</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10  ">
                  <h4 className="">great</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10  ">
                  <h4 className="">Great</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-3 col-md-4 col-sm-5 col-10  ">
                  <h4 className="">Great</h4>
                  <span className="star-icons">
                    {star} {star}
                    {star} {star} <span className="text-warning">{star}</span>{" "}
                  </span>
                  <p>
                    Based on <u>10m reviews</u>
                  </p>
                  <h5>
                    <span className="text-success">{star}</span> Trustpilot
                  </h5>
                </div>
              </Carousel.Item>
          </Carousel>
            </div>
      </div>
    </>
  );
}
