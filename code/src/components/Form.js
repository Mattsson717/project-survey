import React, { useState } from 'react'

import Name from './Name'
import Radio from './Radio'
import Dropdown from './Dropdown'
import LastDrop from './LastDrop'
import Overview from './Overview'

const Form = () => {
  const [startImage] = useState("");
  const [nameInput, setNameInput] = useState('')
  const [radioInput, setRadioInput] = useState([])
  const [dropdownInput, setDropdownInput] = useState('')
  const [lastDropInput, setLastDropInput] = useState('')
  const [step, setStep] = useState(0)


  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  }
  const onDropdownInputChange = (event) => {
    setDropdownInput(event.target.value)
  }
  const onLastDropInputChange = (event) => {
    setLastDropInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

	return (
    <>
    <header></header>
    <div className="page-counter">{step <= 5 && <p>Question number: {step}/5</p>}</div>
    <main className="main-container">
		<section className="survey-container">
      {step === 0 && (
        <>
            <div aria-label="image of horror poster" className="image-container">
            <button className="btn" onClick={onStepChange}>
                Start
              </button>
              <img
                className="start-image"
                value={startImage}
                src="https://i.ibb.co/xqfxzct/horror-poster.jpg"
                alt="poster"
              />
            </div>
        </>
      )}
			{step === 1 && (
				<Name
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<Radio
          radioInput={radioInput}
					onRadioInputChange={onRadioInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange}
				/>
			)}
      {step === 3 && (
				<Dropdown
          dropdownInput={dropdownInput} 
          onDropdownInputChange={onDropdownInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange} 
          />
			)}
      {step === 4 && (
				<LastDrop
          lastDropInput={lastDropInput} 
          onLastDropInputChange={onLastDropInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange} 
          />
			)}
			{step === 5 && (
				<Overview 
          nameInput={nameInput} 
          radioInput={radioInput} 
          dropdownInput={dropdownInput}
          lastDropInput={lastDropInput}
          />
			)}
		</section>
    </main>
    <footer>
  </footer>
    </>
	)
}

export default Form
