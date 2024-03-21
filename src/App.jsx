import "./App.css";
import { useState } from "react";

import Form from "./assets/components/Form";
import StepTwo from "./assets/components/StepTwo";
import Footer from "./assets/components/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);

  return (
    <>
      <div className="container">
        {step === 1 ? (
          <Form
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setStep={setStep}
          />
        ) : (
          <StepTwo
            name={name}
            email={email}
            password={password}
            setStep={setStep}
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
