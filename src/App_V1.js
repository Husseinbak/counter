import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //   const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //   const handler = () => {
  //     setStep(step < messages.length ? step + 1 : step);
  //   };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(() => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : null}>1</div>
            <div className={step >= 2 ? 'active' : null}>2</div>
            <div className={step >= 3 ? 'active' : null}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setStep(step > 1 ? (s) => s - 1 : step);
              }}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setStep(step < messages.length ? (s) => s + 1 : step);
              }}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
