import React, { useState, useEffect, useRef } from "react";
import { useLocation, Redirect } from "react-router-dom";
import Icon from "../Icon";

import "./css/SearchBox.css";

const getRedirect = ref => <Redirect to={`/search/${ref.current.value}`} />;

const SearchBox = () => {
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    setRedirect(false);
    inputRef.current.value = "";
  }, [location.pathname]);
  const doSearch = () => inputRef.current.value && setRedirect(true);
  return (
    <div className="search-box">
      <div className="search-box__input">
        <input
          type="text"
          ref={inputRef}
          onKeyPress={e => e.key === "Enter" && doSearch()}
        />
        <span className="search-box__search" onClick={doSearch}>
          <Icon name="search" />
        </span>
        {redirect && getRedirect(inputRef)}
      </div>
    </div>
  );
};

export default SearchBox;
