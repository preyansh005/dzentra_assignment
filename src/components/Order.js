import React from "react";
import PropTypes from "prop-types";
import "./Order.css";

export default function Order(props) {
  return (
    <>
      <div className="box">
        <div className="inner-box">
          <h5 className="name">{props.name}</h5>
          <h3 className="number">{props.number}</h3>
        </div>
        <i className={`fa-solid ${props.className}`}></i>
      </div>
    </>
  );
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
