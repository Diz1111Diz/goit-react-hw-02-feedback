import React, { useState } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import FeedbackOption from "../FeedbackOption/FeedbackOption";
import Statistic from "../Statistic/Statistic";
import Notification from "../Notification/Notification";

const nameArrBtn = ["Good", "Neutral", "Bad"];

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      return Math.round((good * 100) / total);
    }
    return 0;
  };

  const handleCounterFeedback = (e) => {
    const target = e.target.textContent;
    switch (target) {
      case "Good":
        setGood(good + 1);
        break;
      case "Neutral":
        setNeutral(neutral + 1);
        break;
      case "Bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <SectionTitle title={"Please leave feedback"}>
        <FeedbackOption
          options={nameArrBtn}
          onCounterFeedback={handleCounterFeedback}
        />
      </SectionTitle>

      <SectionTitle title={"Statistic"}>
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </SectionTitle>
    </>
  );
};

export default Feedback;
