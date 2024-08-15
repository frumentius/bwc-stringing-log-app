import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import Header from "../../frameworks/components/details/Header";
import CustomerInfo from "../../frameworks/components/details/CustomerInfo";
import StatusProgress from "../../frameworks/components/details/StatusProgress";

const DetailsApp = () => {
  const { state } = useLocation();
  if (state === null) return <Navigate to="/" />;
  else {
    console.log(state);
    return (
      <>
        <div className="md:container md:mx-auto mx-4">
          <Header orderNo={state[4]} />
          <CustomerInfo state={state} />
          <StatusProgress state={state} />
        </div>
      </>
    );
  }
};

export default DetailsApp;
