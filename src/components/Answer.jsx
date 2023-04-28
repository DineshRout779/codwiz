const Answer = ({ i, option, correctAnsIndex }) => {
  return (
    <div
      className={
        i === correctAnsIndex ? 'option ans option-correct' : 'option ans'
      }
    >
      <span>{String.fromCharCode('A'.charCodeAt(0) + i)}. </span> {option}
    </div>
  );
};

export default Answer;
