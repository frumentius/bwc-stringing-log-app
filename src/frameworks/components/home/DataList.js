import React from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import RacketIcon from "../RacketIcon";
import BrandLogoIcon from "../BrancLogoIcon";

import { isArray, isEmptyArray } from "../../../utilities/validators.js";
import * as CONFIG from "../../../utilities/config.js";

import "./DataList.scss";

const DataList = ({ param = "", data = null, limit = 10 }) => {
  let return_elem = null;

  if (isArray(data)) {
    if (isEmptyArray(data))
      return_elem = (
        <div className="result-list-item mx-auto">No data found.</div>
      );
    else {
      return_elem = [
        <div className="md-typescale-title-small md-color-primary result-list-item mx-auto" key={0}>
          Results for "{param}"
        </div>,
      ];
      let data_length = data.length;
      let brand_name = "";
      let is_known_brand = false;
      let status_idx = 0;
      let dateTime = null;
      let dateNow = new Date();
      let tech_note, status_date;

      for (let i = data_length - 1; i >= data_length - limit; i--) {
        brand_name = data[i][10].trim().toLowerCase();
        is_known_brand = CONFIG.KNOWN_BRAND.includes(brand_name);
        status_date = data[i][0];
        if (data[i][7] && data[i][18]) {
          status_idx = 3;
          status_date = data[i][7];
          if (data[i][23]) {
            status_idx = 4;
            status_date = data[i][23];
          }
        } else {
          tech_note = data[i][22].split(":");
          if (tech_note[0].toLowerCase() === "canceled") status_idx = 0;
          else {
            dateTime = new Date(data[i][8]);
            if (dateNow < dateTime) status_idx = 1;
            else status_idx = 2;
          }
        }
        status_date = new Date(status_date);

        return_elem.push(
          <Link
            to="/details"
            className="result-list-item cursor-pointer mx-auto my-5 block"
            state={data[i]}
            key={i + 1}
          >
            <Card
              interactive={true}
              icon={
                is_known_brand ? (
                  <BrandLogoIcon type={brand_name} />
                ) : (
                  <RacketIcon />
                )
              }
              header={
                <>
                  <div className="flex gap-4">
                    <div className="md-typescale-body-large grow">
                      <strong>
                        {!is_known_brand ? data[i][10] + ": " : ""}
                        {data[i][11]}
                      </strong>
                    </div>
                    <div className="md-typescale-label-medium md-color-on-surface-variant">
                      {status_date.getDate().toString().padStart(2, "0") +
                        "/" +
                        (status_date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}
                    </div>
                  </div>
                  <div className="md-typescale-label-large">
                    {data[i][5]} - {data[i][20].slice(0, 3)}***
                    {data[i][20].slice(-3)}
                  </div>
                </>
              }
              status={CONFIG.STATUS[status_idx].string}
              action={
                <>
                  <md-icon slot="icon">
                    {CONFIG.STATUS[status_idx].icon}
                  </md-icon>
                  <div className="md-typescale-label-medium">
                    {CONFIG.STATUS[status_idx].text}
                  </div>
                </>
              }
            />
          </Link>
        );
      }
    }
  }
  return <div className="mt-8 mb-4">{return_elem}</div>;
};

export default DataList;
