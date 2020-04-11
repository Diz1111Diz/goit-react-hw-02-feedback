import React from "react";
import PropTypes from "prop-types";
import { List, Item } from "./Statistic.styles";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const totalPositive = positivePercentage();
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {totalFeedback}</Item>
      <Item>Positive Feedback: {totalPositive} %</Item>
    </List>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistic;
