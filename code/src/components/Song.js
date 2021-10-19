import React from 'react'

const Song = ({ 
    songInput, 
    onSongInputChange, 
    onStepChange
 }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
        <>
        <article className="survey-article">
        <h2>Type of song:</h2>
		<form>
            <select value={songInput} onChange={onSongInputChange}>
                <option value="">Select your favorite:</option>
                <option value="Lastkaj 14">Lastkaj 14</option>
                <option value="Tenacious D">Tenacious D</option>
                <option value="Elton John">Elton John</option>
            </select>
            <button onClick={onStepChange}>Next questions</button>
		</form>
        </article>
        </>
		
	)
}

export default Song
