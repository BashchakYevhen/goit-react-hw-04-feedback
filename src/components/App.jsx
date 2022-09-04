import { useState } from 'react';
import { Feedback } from './feedback/Feedback';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { GlobalStyle } from 'globalstyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const buttonClick = option => {
    if (option === 'good') {
      setGood(state => state + 1);
    }
    if (option === 'bad') {
      setBad(state => state + 1);
    }
    if (option === 'neutral') {
      setNeutral(state => state + 1);
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const percentage = () => {
    return Math.round((good / total()) * 100);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={buttonClick} />
        {total() > 0 ? (
          <Statistics
            title="Statistics"
            total={total()}
            percentage={percentage()}
            good={good}
            neutral={neutral}
            bad={bad}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
