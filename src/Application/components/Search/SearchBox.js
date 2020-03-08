import React, { useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Icon from "Components/Icon";

import "./css/SearchBox.css";

const doSearch = (history, ref) =>
  ref.current.value && history.push(`/search/${ref.current.value}`);

const SearchBox = () => {
  const location = useLocation();
  const inputRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    inputRef.current.value = "";
  }, [location.pathname]);
  return (
    <div className="search-box">
      <div className="search-box__input">
        <input
          type="text"
          ref={inputRef}
          placeholder="Buscar"
          onKeyPress={e => e.key === "Enter" && doSearch(history, inputRef)}
        />
        <span
          className="search-box__search"
          onClick={() => doSearch(history, inputRef)}
        >
          <Icon name="search" />
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
