import React, { useState, useEffect } from "react";

import Search from "../../frameworks/components/home/Search";
import DataList from "../../frameworks/components/home/DataList";

import "./HomeApp.scss";

const data_increment = 5;
const search_class_scrolled = "fixed w-screen top-0 left-0 p-4 md-background-color-surface-container";

const HomeApp = () => {
  const [label, setLabel] = useState("New restring order");
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [sClass, setSClass] = useState("");

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
      let scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight - 1;
      if (scrollableHeight < 0) scrollableHeight = 0;

      console.log(currentScroll, scrollableHeight);
      if (currentScroll >= scrollableHeight && !loading) {
        loadMore(data, limit);
      }
      if (currentScroll > 16 && label !== "") setLabel("");
      if (currentScroll <= 16 && label === "") setLabel("New restring order");

      if (currentScroll <= 145 && sClass !== "") setSClass("");
      if (currentScroll > 145 && sClass === "") setSClass(search_class_scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, data, limit, label, sClass]);

  return (
    <>
      <div className="md:container md:mx-auto mx-4">
        <div className="md-typescale-headline-large pt-28 pb-8">Search</div>
        <div className={sClass}>
          <Search
            increment={data_increment}
            setData={setData}
            setLoading={setLoading}
            setKeywords={setKeywords}
            setLimit={setLimit}
          />
        </div>
        <div className={sClass ? "filler-h-48 block" : "filler-h-48 hidden"}></div>
        <DataList param={keywords} data={data} limit={limit} />
        {loading && (
          <md-circular-progress
            four-color
            indeterminate
            class="block mx-auto"
          ></md-circular-progress>
        )}
      </div>
      <div className="fixed right-6 bottom-6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf-eqigXjJJ9q2mtydiRA8fMQLGlr7uRDqb-ohXwfkIQxjhbQ/viewform?usp=sf_link"
          rel="noreferrer"
        >
          <md-fab lowered variant="primary" label={label}>
            <md-icon slot="icon">add</md-icon>
          </md-fab>
        </a>
      </div>
    </>
  );
};

export default HomeApp;
