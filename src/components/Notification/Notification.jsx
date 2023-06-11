import PropTypes from 'prop-types';
import { P } from './Notification.styled';



export const Notification = ({ message }) => (
  <P>{message}</P>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


