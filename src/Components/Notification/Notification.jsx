import React from "react";
import PropTypes from "prop-types";
import { Text } from "./Notification.styles";

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: "No feedback given",
};

export default Notification;
