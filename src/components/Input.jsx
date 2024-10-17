import PropTypes from "prop-types";

function CalculatorInput({ setNumber, number }) {
  return (
    <>
      <button onClick={() => setNumber(Number(number) + 1)}>+</button>
      <input value={number} onInput={(e) => setNumber(e.target.value)} />
      <button onClick={() => setNumber(Number(number) - 1)}>-</button>
    </>
  );
}

CalculatorInput.propTypes = {
  setNumber: PropTypes.func,
  number: PropTypes.string,
};

export default CalculatorInput;
