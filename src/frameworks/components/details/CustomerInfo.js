import React from "react";
import { isReceiptNumber } from "../../../utilities/validators";

const MONTH_STRING_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomerInfo = ({ state }) => {
  const due_date = new Date(state[8]);
  let payment_status = state[2].toString().trim();
  if (payment_status === "" || payment_status.toLowerCase() === "unpaid")
    payment_status = "UNPAID";
  else if (isReceiptNumber(payment_status)) payment_status = "PAID";
  return (
    <>
      <div className="py-4">
        <div className="md-typescale-title-small md-color-primary">
          Basic info
        </div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">Name</div>
        <div className="md-typescale-body-large">{state[5]}</div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">Phone number</div>
        <div className="md-typescale-body-large">
          {state[20].slice(0, 3)}***
          {state[20].slice(-3)}
        </div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">Racket</div>
        <div className="md-typescale-body-large">
          {state[10].trim()} - {state[11]}
        </div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">String</div>
        <div className="md-typescale-body-large">
          {state[12]} - {state[13].trim()} ({state[15]}lbs)
        </div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">Payment status</div>
        <div className="md-typescale-body-large">{payment_status}</div>
      </div>
      <div className="py-4">
        <div className="md-typescale-title-large">Due date</div>
        <div className="md-typescale-body-large">
          {due_date.getDate()}&nbsp;
          {MONTH_STRING_LONG[due_date.getMonth()]}&nbsp;
          {due_date.getFullYear()}
        </div>
      </div>
      {state[19] && (
        <div className="py-4">
          <div className="md-typescale-title-large">Notes</div>
          <div className="md-typescale-body-large">{state[19]}</div>
        </div>
      )}
    </>
  );
};

export default CustomerInfo;
