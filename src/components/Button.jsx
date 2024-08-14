import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.clickFun} className={`mb-3 ${props.btnLoader ? "disabled" : ""} ${props.buttonClass}`}>
      {!props.btnLoader ? (
        props.buttonText
      ) : (
        <>
          <span
            className="spinner-border spinner-border-sm me-1"
            role="status"
            aria-hidden="true"
          ></span>
          {props.buttonText}
        </>
      )}
    </button>
  );
};

export default Button;
