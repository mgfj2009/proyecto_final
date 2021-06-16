import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LinkButton = ({ type, to, text }) => (
  <Link className="buttonPrimary" to={to}>
     <button className={"btn btn-lg btn-"+type}>{text}</button>
  </Link>
);

LinkButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'warn' ,'danger']),
  text: PropTypes.string,
  to: PropTypes.string.isRequired
}


export default LinkButton;
