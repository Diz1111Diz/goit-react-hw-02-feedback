import React from "react";
import PropTypes from "prop-types";
import { Button, Wrapper } from "./FeedbackOption.styles";

const FeedbackOption = ({ options, onCounterFeedback }) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <Button key={option} type="button" onClick={onCounterFeedback}>
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onCounterFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
