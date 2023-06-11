import styled from 'styled-components';
import { Btn } from './FeedbackOptions.styled';


// export const FeedbackOptions = ({ onLeaveFeedback }) => (
//   <>
//     <Btn type="button" name="good" onClick={onLeaveFeedback}>Good</Btn>
//     <Btn type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</Btn>
//     <Btn type="button" name="bad" onClick={onLeaveFeedback}>Bad</Btn>
//   </>
// )
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const feedbackOptions = ["good", "neutral", "bad"];

  return (
    <>
      {feedbackOptions.map((option) => (
        <Btn
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Btn>
      ))}
    </>
  );
};