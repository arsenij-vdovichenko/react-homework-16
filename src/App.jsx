import { useState } from "react";

import "./App.css";
import FeedbackOptions from "./component/FeedbackOptions";
import Statistics from "./component/Statistics";
import Section from "./component/Section";
import Notification from "./component/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood((prev) => prev + 1);
  };

  const handleNeutral = () => {
    setNeutral((prev) => prev + 1);
  };

  const handleBad = () => {
    setBad((prev) => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
     <Section title="Please leave feedback">
      {/* <button type='button' onClick={handleGood}>Good</button>
      <button type='button' onClick={handleNeutral}>Neutral</button>
      <button type='button' onClick={handleBad}>Bad</button> */}
      <FeedbackOptions
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      </Section>
      {/* {countTotalFeedback()>0 &&  <div>
        <h2>Statistic</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{countTotalFeedback()}</p>
        <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p>
      </div>} */}
      <Section title="Statistics">
      {countTotalFeedback() > 0 ?  (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        ) : (
          <Notification message="There is no feedback" />
      )}
      </Section>
    </>
  );
}

export default App;
