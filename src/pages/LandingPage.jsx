import React, { useEffect, useContext, useState } from "react";
import Card from "../components/Card/Card";
import "../styles/LandingPage.css";
import { carContext } from "../context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

function LandingPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const setPage = (pageToNavigate) => {
    navigate(`/${pageToNavigate}`);
  };

  const {
    allcar,
    setAllCar,
    searchTerm,
  } = useContext(carContext);

  const fetchAllCars = async () => {
    const data = await fetch("data.json");
    const res = await data.json();
    setAllCar(res.cars);
  };
  useEffect(() => {
    fetchAllCars();
  }, []);

  console.log(allcar);
  const nextpage = () => {
    setPage(Number(page) + Number(1));
    if (Number(page) === Number(10)) {
      setPage(Number(1));
    }
  };
  const prevpage = () => {
    if (Number(page) === Number(1)) {
      setPage(1);
    } else {
      setPage(Number(page) - Number(1));
    }
  };
  const anypage = (x) => {
    setPage(x);
  };
  useEffect(() => {
    if (!page) {
      navigate("/1");
    }
  }, []);
  return (
    <>
      <div className="card-wrapper">
        {allcar
          .filter((car) => {
            return (
              car.brand &&
              car.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .slice(page * 6 - 6, page * 6)
          .map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                brand={item.brand}
                year={item.year}
                capacity={item.capacity}
                fuel={item.fuel}
                speed={item.speed}
                mode={item.mode}
                rent={item.rent}
              />
            );
          })}
      </div>
      <div className="pagination-wrapper">
        <div className="pagination">
          <div className="pagination-left">{page} from 10</div>
          <div className="pagination-right">
            {page > 1 && (
              <AiOutlineArrowLeft className="selected" onClick={prevpage} />
            )}
            {[...Array(allcar.length / 6)].map((_, i) => {
              return (
                <span
                  key={i}
                  className="selected"
                  id="page_number"
                  onClick={() => {
                    anypage(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              );
            })}
            <AiOutlineArrowRight className="selected" onClick={nextpage} />
            {/* <ReactPaginate
              className="react-paginate"
              pageClassName="selected"
              breakLabel="..."
              nextLabel={
                <AiOutlineArrowRight className="selected" onClick={nextpage} />
              }
              onPageChange={nextpage}
              pageRangeDisplayed={2}
              pageCount={10}
              previousLabel={
                <AiOutlineArrowLeft className="selected" onClick={nextpage} />
              }
              renderOnZeroPageCount={null}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
