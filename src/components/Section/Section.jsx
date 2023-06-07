import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.section`
height: 200px;
 text-align: center;
 `;

 const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: black;
  text-shadow:2px 0 1px #ffffff6f;
`;

export const Section = ({ title, children }) => (
  <Wrap>
    <Title>{title}</Title>
    {children}
  </Wrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};