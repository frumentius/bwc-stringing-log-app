import React, { useState } from "react";
import "./Search.scss";

import { Search as SearchUC } from "../../../useCases/Search.js";

const Search = ({ increment, setData, setLoading, setKeywords, setLimit }) => {
  const [param, setParam] = useState("");

  const handleParamChange = (e) => setParam(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const search_uc = new SearchUC();
    search_uc
      .execute(param)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((resData) => {
            setLoading(false);
            let data_len = resData.length;
            if (data_len >= increment) setLimit(increment);
            else setLimit(data_len);
            setKeywords(param);
            setData(resData);
            setParam("");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setLimit(0);
        setKeywords("");
        setData(null);
        setParam("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search mx-auto">
        <div className="leading-icon">
          <md-icon slot="icon">search</md-icon>
        </div>
        <input
          type="text"
          placeholder="Search id, name, or phone number"
          className="md-typescale-body-large"
          onChange={handleParamChange}
          value={param}
          required
        />
        <div className="trailing-icon">
          <img
            className="avatar"
            src="/assets/images/avatar_placeholder.png"
            alt="avatar"
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
