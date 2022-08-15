import PropTypes from 'prop-types';
import { StatHead, ListElem, Text } from './Statistics.style';
export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  percentage,
  title,
}) => {
  return (
    <>
      <StatHead>{title}:</StatHead>
      <ul>
        <ListElem>
          <Text>Good:</Text>
          {good}
        </ListElem>
        <ListElem>
          <Text>Neutral:</Text>
          {neutral}
        </ListElem>
        <ListElem>
          <Text>Bad:</Text>
          {bad}
        </ListElem>
        <ListElem>
          <Text>Total:</Text>
          {total}
        </ListElem>
        <ListElem>
          <Text>Positive feedback:</Text>
          {percentage}%
        </ListElem>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
