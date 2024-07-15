import React from "react";

const Button = ({ buttonText, btnLoader }) => {
  return (
    <button className={`mb-3 ${btnLoader ? "disabled" : ""}`}>
      {!btnLoader ? (
        buttonText
      ) : (
        <>
          <span
            className="spinner-border spinner-border-sm me-1"
            role="status"
            aria-hidden="true"
          ></span>
          {buttonText}
        </>
      )}
    </button>
  );
};

export default Button;
