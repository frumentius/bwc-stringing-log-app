import React from "react";

import Card from "../Card";

import { date2Format } from "../../../utilities/parsers";

import "./StatusProgress.scss";

const TimelineList = ({ overline, headline, supportingText }) => {
  return (
    <div className="relative py-3 px-4">
      <div className="timeline__bullet"></div>
      {overline && (
        <div className="md-typescale-label-medium md-color-on-surface-variant">
          {overline}
        </div>
      )}
      {headline && (
        <div className="md-typescale-body-medium">
          <strong>{headline}</strong>
        </div>
      )}
      {supportingText && (
        <div className="md-typescale-label-medium">{supportingText}</div>
      )}
    </div>
  );
};

const StatusProgress = ({ state }) => {
  let status_date = new Date(state[0]);
  let status_progress = [];
  
  status_progress.push(
    <TimelineList
      key="created"
      overline={date2Format(status_date)}
      headline="Order created"
    />
  );
  let comment = state[22];
  comment = comment.split(":");
  if (comment[0].toLowerCase() === "canceled") {
    status_progress.push(
      <TimelineList
        key="canceled"
        overline={date2Format(status_date)}
        headline="Canceled"
        supportingText={comment[1]}
      />
    );
  } else if (state[7] && state[18]) {
    status_date = new Date(state[7]);
    status_progress.push(
      <TimelineList
        key="done"
        overline={date2Format(status_date)}
        headline="Done"
        supportingText={"Strung by: " + state[18]}
      />
    );
    if (state[23]) {
      status_date = new Date(state[23]);
      status_progress.push(
        <TimelineList
          key="picked-up"
          overline={date2Format(status_date)}
          headline="Picked up"
        />
      );
    }
  } else {
    status_progress.push(
      <TimelineList key="on-progress" overline="..." headline="On progress" />
    );
  }

  return (
    <>
      <div className="md-typescale-headline-small grow mt-5 mb-4">
        Status progress
      </div>
      <div className="mb-8">
        <Card
          variant="outlined"
          body={<div className="timeline">{status_progress}</div>}
        />
      </div>
    </>
  );
};

export default StatusProgress;
