import PropTypes from 'prop-types';
import { List, Item, Value } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <List>
            <Item>Good: <Value>{good}</Value></Item>
            <Item>Neutral: <Value>{neutral}</Value></Item>
            <Item>Bad: <Value>{bad}</Value></Item>
        </List>
        <List>
            <Item>Total: <Value>{total}</Value></Item>
            <Item>Positive feedback:{' '} <Value>{positivePercentage} % </Value></Item>
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
