import { SectionStyle } from './Section.style';
export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  );
};
