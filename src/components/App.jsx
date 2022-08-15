import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { GlobalStyle } from 'globalstyle';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClick = option => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.buttonClick} />
          {total > 0 ? (
            <Statistics
              title="Statistics"
              total={total}
              percentage={percentage}
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
  }
}
