import css from './Options.module.css';

export default function Options({
  updateFeedback,
  setFeedback,
  totalFeedback,
}) {
  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <ul className={css.list}>
      <li>
        <button onClick={() => updateFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={reset}>Reset</button>
        </li>
      )}
    </ul>
  );
}
