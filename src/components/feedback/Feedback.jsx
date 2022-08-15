import PropTypes from 'prop-types';
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
Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
