import React from "react";
import "./Card.css";
import { GoPeople } from "react-icons/go";
import { BiGasPump } from "react-icons/bi";
import { SlSpeedometer } from "react-icons/sl";
import { PiSteeringWheel } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

function Card({image,brand,year,capacity,fuel,speed,mode,rent}) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img
            src={image}
            alt="car"
          />
        </div>
        <div className="card-info">
          <div className="car-name-year">
            <div className="car-brand">{brand}</div>
            <div className="year">{year}</div>
          </div>
          <div className="boxes">
            <div className="box">
              <GoPeople
                style={{ color: "rgb(85, 161, 238)", fontSize: "18px" }}
              />
              {capacity} People
            </div>
            <div className="box">
              <BiGasPump
                style={{ color: "rgb(85, 161, 238)", fontSize: "18px" }}
              />
              {fuel}
            </div>
            <div className="box">
              <SlSpeedometer
                style={{ color: "rgb(85, 161, 238)", fontSize: "18px" }}
              />
              {speed} km/ 1-litre
            </div>
            <div className="box">
              <PiSteeringWheel
                style={{ color: "rgb(85, 161, 238)", fontSize: "18px" }}
              />
              Automatic
            </div>
          </div>
          <div className="rent-option">
            <div className="rent">
              <span>{rent}</span>/ Per month
            </div>
            <div className="rent-buttons">
              <button className="react-icon">
                <BsHeart />
              </button>
              <button className="rent-button">Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
