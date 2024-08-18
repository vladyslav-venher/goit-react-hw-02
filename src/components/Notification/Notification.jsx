import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

export default Notification;
