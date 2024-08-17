import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>Good: {feedback.good} </li>
      <li>Neutral: {feedback.neutral} </li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback} </li>
      <li>Positive: {positiveFeedback}% </li>
    </ul>
  );
}
