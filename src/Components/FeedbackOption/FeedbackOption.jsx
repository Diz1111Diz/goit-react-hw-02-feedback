import React from "react";
import PropTypes from "prop-types";
import { Button, Wrapper } from "./FeedbackOption.styles";

const FeedbackOption = ({ options, onCounterFeedback }) => {
  return (
    <Wrapper>
      {options.map((name) => (
        <Button key={name} type="button" onClick={onCounterFeedback}>
          {name}
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
