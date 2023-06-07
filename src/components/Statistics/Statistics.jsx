import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
display: flex;
justify-content: center;
list-style: none;
padding-left: 5px;
margin: 0;
`;

const Item = styled.ul`
font-size: 20px;
margin: 10px;
color: rgb(248, 3, 118);
 text-shadow:1px 0 1px #ffffff6f;
  letter-spacing: 2px;
`;

const Value = styled.span`
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <List>
            <Item>Good: <Value>{good}</Value></Item>
            <Item>Neutral: <Value>{neutral}</Value></Item>
            <Item>Bad: <Value>{bad}</Value></Item>
        </List>
        <List>
            <Item>Total: <Value>{total}</Value></Item>
            <Item>Positive feedback:{' '} <Value>{positivePercentage}</Value></Item>
        </List>
    </>
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
