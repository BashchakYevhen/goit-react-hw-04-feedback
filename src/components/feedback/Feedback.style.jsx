import styled from 'styled-components';

export const FeedbackButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.secondary};
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;
