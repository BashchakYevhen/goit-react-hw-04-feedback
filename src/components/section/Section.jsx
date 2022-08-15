import PropTypes from 'prop-types';
import { SectionStyle } from './Section.style';
export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
