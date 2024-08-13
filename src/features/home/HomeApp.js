import React, { useState, useEffect } from "react";

import Search from "../../frameworks/components/home/Search";
import DataList from "../../frameworks/components/home/DataList";

import "./HomeApp.scss";

const toggleTheme = () => {
  if (document.body.className === "light") document.body.className = "dark";
  else document.body.className = "light";
};

const data_increment = 5;

const HomeApp = () => {
  const [label, setLabel] = useState("New restring order");
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");

  const loadMore = (passedData, passedLimit) => {
    let data_length = 0;
    if (passedData) data_length = passedData.length;
    if (passedLimit < data_length) {
      setLoading(true);
      setTimeout(() => {
        if (passedLimit + data_increment <= data_length)
          setLimit((prevLimit) => prevLimit + data_increment);
        else setLimit(data_length);
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight -3;
      if (scrollableHeight < 0) scrollableHeight = 0;

      if (
        currentScroll >= scrollableHeight &&
        !loading
      ) {
        loadMore(data, limit);
      }
      if (currentScroll > 16 && label !== "") setLabel("");
      if (currentScroll <= 16 && label === "") setLabel("New restring order");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, data, limit, label]);

  return (
    <>
      <div className="md:container md:mx-auto mx-4">
        <div className="md-typescale-headline-large my-6">Search</div>
        <Search increment={data_increment} setData={setData} setLoading={setLoading} setKeywords={setKeywords} setLimit={setLimit} />
        <DataList param={keywords} data={data} limit={limit} />
        {loading && (
          <md-circular-progress
            four-color
            indeterminate
            class="block mx-auto"
          ></md-circular-progress>
        )}
      </div>
      <div className="fixed right-4 bottom-4">
        <md-fab lowered variant="primary" label={label} onClick={toggleTheme}>
          <md-icon slot="icon">add</md-icon>
        </md-fab>
      </div>
    </>
  );
};

export default HomeApp;
