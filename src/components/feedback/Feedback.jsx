import { FeedbackButton } from './Feedback.style';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <FeedbackButton
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    );
  });
};
