import Input from "./Inputs";

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setStep,
}) => {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (confirmPassword === password) {
            setStep(2);
          } else {
            alert("vos mots de passe ne sont pas identiques");
          }
        }}
      >
        <h1>Create Account</h1>

        <Input
          title="Name"
          type="text"
          value={name}
          placeholder="Jean Dupont"
          setState={setName}
        />

        <Input
          title="Email"
          type="email"
          value={email}
          setState={setEmail}
          placeholder="jeandupont@lereacteur.io"
        />

        <Input
          title="Password"
          type="password"
          value={password}
          setState={setPassword}
          placeholder="azerty"
        />

        <Input
          title="Confirm your Password"
          type="password"
          value={confirmPassword}
          setState={setConfirmPassword}
          placeholder="azerty"
        />

        <input type="submit" value="Register" className="confirmButton" />
      </form>
    </div>
  );
};

export default Form;
