const Input = ({ type, value, placeholder, setState, title }) => {
  return (
    <div className="input">
      <p>{title}</p>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
