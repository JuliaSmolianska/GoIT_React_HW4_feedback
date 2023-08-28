import css from './Feedback.module.css';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';
import PropTypes from 'prop-types';

const icons = [
  <BsFillEmojiSmileFill />,
  <BsFillEmojiNeutralFill />,
  <BsFillEmojiFrownFill />,
];

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.box}>
      {options.map((option, index) => (
        <button
          className={css.button_vote}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {' '}
          <span>{icons[index]}</span>
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
