import React, { useState } from "react";

const Filter = () => {
  const [filterState, setState] = useState(false);
  return (
    <>
      <section className="filter ">
        <div className={"filter__containers " + (filterState ? "active" : "")}>
          <div
            className="filter__icon"
            onClick={() => {
              if (filterState) {
                setState(false);
              } else {
                setState(true);
              }
            }}
          >
            <i className="fas fa-sliders-h"></i>
          </div>
          <div className="filter__registration">등록순</div>
          <div className="filter__interest">관심순</div>
          <div className="filter__closure">마감순</div>
        </div>
      </section>
    </>
  );
};

export default Filter;
