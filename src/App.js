import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  //   const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleclickPrevious() {
    setStep(step > 1 ? (s) => s - 1 : step);
  }

  function handleclickNext() {
    setStep(step < 3 ? (s) => s + 1 : step);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(() => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>

          <StepMessage step={step}> {messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleclickPrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleclickNext}
            >
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
