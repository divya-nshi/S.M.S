import React from "react";
import ReactDOM from "react-dom";

import "../static/css/ErrorNotFound.css";

function ErrorNotFound({ setError404 }) {
  setError404(true);
  return ReactDOM.createPortal(
    <_ErrorPage />,
    document.getElementById("portal")
  );
}

function _ErrorPage() {
  return (
    <React.Fragment>
      <div className="_ErrorPage">
          <div className="_ErrorImage"></div>
      </div>
    </React.Fragment>
  );
}

export default ErrorNotFound;
