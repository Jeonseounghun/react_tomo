import React, { useState } from "react";
import "../scss/search.scss";
import "../scss/main.scss";

const SearchDetail = (props) => {
  const [search, setSearch] = useState(null);
  const business = props.state.business;
  const news = props.state.news;

  const businessList = business.map((El) =>
    El.title.indexOf(search) !== -1 || El.content.indexOf(search) !== -1 ? (
      <li
        onClick={() => {
          window.location.href = `/main_tap/${El.idx}`;
        }}
      >
        {El.title}
      </li>
    ) : (
      ""
    )
  );
  const newsList = news.map((El) =>
    El.title.indexOf(search) !== -1 || El.content.indexOf(search) !== -1 ? (
      <li
        onClick={() => {
          window.location.href = `/main_tap/${El.idx}`;
        }}
      >
        {El.title}
      </li>
    ) : (
      ""
    )
  );
  const businessListarray = businessList.map((El) => {
    if (El !== "") {
      return true;
    }
    return El;
  });
  const newsListarray = newsList.map((El) => {
    if (El !== "") {
      return true;
    }
    return El;
  });

  return (
    <>
      <section className="search">
        <div className="search__container">
          <input id="search" type="text" placeholder="검색어를 입력해주세요." />
          <div
            className="search__icon"
            onClick={() => {
              const searchValue = document.querySelector("#search");
              setSearch(searchValue.value);
            }}
          >
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search__results">
          <div className="search__title">
            <span>
              {search ? `검색어 : ${search}` : "검색어를 입력해주세요"}
            </span>
          </div>
          <div className="search__result">
            {search ? (
              businessListarray.indexOf(true) >= 0 ? (
                <div className="contents">
                  <div className="content">
                    <div className="content__title">지원사업</div>
                    <ul>{businessList}</ul>
                  </div>
                </div>
              ) : (
                <div className="contents">
                  <div className="content">
                    <div className="content__title">지원사업</div>
                    <ul>
                      <li>검색결과 없습니다.</li>
                    </ul>
                  </div>
                </div>
              )
            ) : (
              ""
            )}
            {search ? (
              newsListarray.indexOf(true) >= 0 ? (
                <div className="contents">
                  <div className="content">
                    <div className="content__title">뉴스</div>
                    <ul>{newsList}</ul>
                  </div>
                </div>
              ) : (
                <div className="contents">
                  <div className="content">
                    <div className="content__title">뉴스</div>
                    <ul>
                      <li>검색결과 없습니다.</li>
                    </ul>
                  </div>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchDetail;
