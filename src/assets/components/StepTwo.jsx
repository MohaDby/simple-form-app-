const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div className="stepTwo">
      <h1>Result</h1>
      <div className="result">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button
        className="confirmButton"
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
